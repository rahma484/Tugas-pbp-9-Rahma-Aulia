const db = require('../config/db');

//async - wait

const getAllBooks =async () =>{
    const [rows] =await db.query("select * from buku")
    return rows
}

const getBookByCode = async(code)=>{
    const [row]=
    await db.query("select * from buku where kode_buku=?", [code])
    return row[0]
}
const addBook = async(book)=>{
    const {kode, judul, pengarang, penerbit} = book
    const query= "insert into buku" +
    "(kode_buku, judul, pengarang, penerbit)" +
    "values (?, ?, ?, ?)"
    const affected = await db.query(query,[kode, judul, pengarang, penerbit])
    return affected[0].affectedRows
}

const delBook = async(id)=>{
    const aff = await db.query ("delete from buku where kode_buku = ?", [id])
    return aff[0].affectedRows
}
const PutBook = async(code, data)=>{
    const {judul, pengarang, penerbit} = data
    const query= 
        `UPDATE buku 
        SET judul = ?, pengarang = ?, penerbit = ?
        WHERE kode_buku= ?`
    const [result] = await db.query(query,[judul, pengarang, penerbit, code])
    return result.affectedRows
}
const dataUser = ['Robi', 'Deni', 'Fera']
const getAllUsers = () =>{
    return dataUser
}

const getUserById = (id) =>{
    const result = []
    if(id <= dataUser.length){
        result.push(dataUser[id-1])
        return result
    }

    return[]
}

module.exports = {getAllBooks, getBookByCode, addBook, delBook, PutBook, getAllUsers, getUserById}