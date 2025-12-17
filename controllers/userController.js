const userModel = require('../models/userModel')

const getAllBooks = async(req,res)=>{
    try{
        const books =await userModel.getAllBooks()
        res.json(books)
    }
    catch (error){
        console.log("ERROR GET ALL BOOK:", error);
        res.status(500).json(
            {
                message : "Error Get All Book",
                status : 500
            }
        )
    }
}

const getBookByCode = async(req, res)=>{
    try{
        const book = await userModel.getBookByCode(req.params.code);

        if (!book){
            return res.status(400).json(
            {
                message : "Data not found"
            })
        }

    res.status(200).json(book);
    }
    catch (error){
        res.status(500).json({message: error})
    }
}
const addBook = async(req, res)=>{
   const {kode, judul, pengarang, penerbit} = req.body
   let iskode = true
   let isjudul = true
   let msg = ""
   if (!kode){
        msg = msg + "Kode buku wajib diisi\n"
        iskode=false
   }
   if (!judul){
        msg = msg + "Judul buku wajib diisi\n"
        isjudul=false
   }
   if(iskode && isjudul){
        try{
            const affected = await userModel.addBook(req.body)
            if(affected==1){
                res.status(201).json({
                    message: "Insert succesfull",
                    data: {...req.body}
                })
            }

        }catch (error){
            res.status(400).json({
                message: error
            })
        }
    }
    else{
        res.status(400).json({msg:msg})
    }
}
const delBook = async (req, res)=>{
    try{
        const result = await userModel.delBook(req.params.code)
        if(result==1){
            res.status(200).json({msg: "Delete is succesfull"})
        }
        else{
            res.status(400).json({msg: "Failed"})
        }

    } catch (error){
        res.status(400).json({msg: error})
    }
}
const PutBook = async (req, res)=>{
    try{
        const result = await userModel.PutBook(req.params.code, req.body)
        if(result ==1){
            res.status(200).json({msg: "Update is Succesfull"})
        }
        else{
            res.status(400).json({msg: "Data Not Found"})
        }
    } catch (error){
        res.status(400).json({msg: error})
    }
}
const getAllUsers = (req, res) => {
    try{
        const users = userModel.getAllUsers()

        if(users.length > 0){
            res.status(200).json({
                result : users,
                msg : "Success get All data"
            })
        }
        else{
            res.status(200).json({
                result : users,
                msg : "data not found"
            })
        }
    }catch (error){
        res.status(500).json({
            msg : error
        })
    }
}

const getUserById = (req, res) =>{
    try{
        console.log(req.params.id);

        const user = userModel.getUserById(req.params.id)

        if(user.length==1){
            res.status(200).json({
                data : user,
                msg : "user found"
            })
        } else {
            res.status(200).json({
                msg : "user not found"
            })
        }
    }catch(error){
        res.status(500).json({
            msg : error
        })
    }
}

module.exports = {getAllBooks, getBookByCode, addBook, delBook, PutBook, getAllUsers, getUserById}