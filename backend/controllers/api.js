const Data = require("../model/data");
const { s3 } = require("../middleware/upload");
module.exports = class Api {
  static async createData(req, res) {
    try {
      const {
        title,
        author,
        ongoing,
        tags,
        image,
        file,
        chapters,
        seasons,
        description,
      } = req.body;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: req.files.image[0].originalname,
        Body: req.files.image[0].buffer,
        ACL: "public-read-write",
        ContentType: "image/jpg",
      };

      s3.upload(params, async (error, data) => {
        if (error) {
          res.status(500).send({ err: error });
        }
        let params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: req.files.file[0].originalname,
          Body: req.files.file[0].buffer,
          ACL: "public-read-write",
          ContentType: "application/pdf",
        };
        let newdata = {
          title,
          author,
          ongoing,
          tags,
          image: data.Location,
          file,
          chapters,
          description,
          seasons,
        };
        s3.upload(params, async (error, data) => {
          if (error) {
            res.status(500).send({ err: error });
          }
          const finalData = { ...newdata, file: data.Location };
          const manga = await Data.create(finalData);
          res.status(201).send({ message: "Manga Added sucessfully", manga });
        });
      });
    } catch (e) {
      console.log("in catch block", e);
      res.status(500).send({ message: "oops! something went wrong" });
    }
  }

  static async getAllNovels(req, res) {
    try {
      const allNovels = await Data.find();
      res.status(200).send({ message: "sucess", allNovels });
    } catch (e) {
      console.log("in catch block", e);
      res.status(500).send({ message: "oops! something went wrong" });
    }
  }

  static async getNovelById(req, res) {
    try {
      const id = req.params.id;
      const singleNovel = await Data.findById(id);
      res.status(200).send({ message: "sucess", singleNovel });
    } catch (e) {
      console.log("Error", e);
      res.status(500).send({ message: "oops! something went wrong" });
    }
  }

  static async updateNovelById(req, res) {
    let id = req.params.id;
    const { image, file } = req.files;
    try {
      const { title, author, ongoing, tags, chapters, seasons, description } =
        req.body;
      if (image || file) {
        if(image && file){
          const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.files.image[0].originalname,
            Body: req.files.image[0].buffer,
            ACL: "public-read-write",
            ContentType: "image/jpg",
          };
    
          s3.upload(params, async (error, data) => {
            if (error) {
              res.status(500).send({ err: error });
            }
            let params = {
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: req.files.file[0].originalname,
              Body: req.files.file[0].buffer,
              ACL: "public-read-write",
              ContentType: "application/pdf",
            };
            let newdata = {
              title,
              author,
              ongoing,
              tags,
              image: data.Location,
              file,
              chapters,
              description,
              seasons,
            };
            s3.upload(params, async (error, data) => {
              if (error) {
                res.status(500).send({ err: error });
              }
              const finalData = { ...newdata, file: data.Location };
              const updatedData = await Data.findByIdAndUpdate(id, finalData);
            res.status(200).send({ message: "Image updated", updatedData });
            });
          });
        }
        else if (image) {
          const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.files.image[0].originalname,
            Body: req.files.image[0].buffer,
            ACL: "public-read-write",
            ContentType: "image/jpg",
          };

          s3.upload(params, async (error, data) => {
            if (error) {
              res.status(500).send({ err: error });
            }
            let newData = {
              title,
              author,
              ongoing,
              tags,
              image: data.Location,
              file,
              chapters,
              description,
              seasons,
            };
            const updatedData = await Data.findByIdAndUpdate(id, newData);
            res.status(200).send({ message: "Image updated", updatedData });
          });
        }  
          else {
          const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.files.file[0].originalname,
            Body: req.files.file[0].buffer,
            ACL: "public-read-write",
            ContentType: "application/pdf",
          };

          s3.upload(params, async (error, data) => {
            if (error) {
              res.status(500).send({ err: error });
            }
            let newData = {
              title,
              author,
              ongoing,
              tags,
              image,
              file: data.Location,
              chapters,
              description,
              seasons,
            };
            const updatedData = await Data.findByIdAndUpdate(id, newData);
            res.status(200).send({ message: "File updated", updatedData });
          });
        }
      } else {
        let newData = req.body;
        const data = await Data.findByIdAndUpdate(id, newData);
        res.status(200).json(data);
      }
    } catch (error) {
      console.log("error in update api catch block", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  static async deleteNovelById(req, res) {
    console.log("req", req);
    const id = req.params.id;
    try {
      const data = await Data.findByIdAndDelete(id);

      res.status(200).json(data);
    } catch (err) {
      console.log("error in delete api catch block", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
