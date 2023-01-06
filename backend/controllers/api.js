const Data = require("../model/data");
const { s3 } = require("../middleware/upload");
module.exports = class Api {
  static async createData(req, res) {
    try {
      const {title, author, ongoing, tags, image, file, chapters,seasons,description} = req.body
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: req.files.image[0].originalname,
        Body: req.files.image[0].buffer,
        ACL: "public-read-write",
        ContentType:"image/jpg",
      };
      
      s3.upload(params, async (error, data) => {
        if (error) {
          res.status(500).send({ err: error });
        }
        let params={
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: req.files.file[0].originalname,
          Body: req.files.file[0].buffer,
          ACL: "public-read-write",
          ContentType: "application/pdf",
        }
        let newdata={
          title,
          author,
          ongoing,
          tags,
          image:data.Location,
          file,
          chapters,
          description,
          seasons,
      }
        s3.upload(params, async (error, data) =>{
          if (error) {
            res.status(500).send({ err: error });
          }
          const finalData={...newdata,file:data.Location}
          const manga= await Data.create(finalData)
          res.status(201).send({ message: "Manga Added sucessfully",manga }) 
        })
        
      });
    } catch (e) {
      console.log("in catch block", e);
      res.status(500).send({ message: "oops! something went wrong" });
    }
  }

  static async getAllNovels(req, res){
    try{
        const allNovels= await Data.find()
        res.status(200).send({message: "sucess", allNovels})

    }catch (e) {
        console.log("in catch block", e);
        res.status(500).send({ message: "oops! something went wrong" });
      }
  }

  static async getNovelById(req, res) {
    try{
        console.log("in try block")
        const id= req.params.id;
        console.log("++++++++++in novel id: " + id);
        const singleNovel= await Data.findById(id);
        res.status(200).send({ message:"sucess", singleNovel});
    }catch(e){
        console.log("Error",e)
        res.status(500).send({ message: "oops! something went wrong"})
    }
  }

  static deleteNovelById(req, res){
    console.log("req")
  }
};
