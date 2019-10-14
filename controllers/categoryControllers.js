const { sqlDB } = require('../database')

module.exports = {
    getCategory : (req, res) => {
        var nama = req.query.nama ? req.query.nama : ''
    
        var sql = `SELECT * FROM categories WHERE nama LIKE '%${nama}%';`
        
        sqlDB.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    },

    getCategoryById : (req, res) => {
        var sql = `SELECT * FROM categories WHERE id = ${req.params.id};`
        
        sqlDB.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    },

    deleteCategory : (req, res) => {
        var sql = `DELETE FROM categories 
                    WHERE id = ${req.params.id};`
        
        sqlDB.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    },

    addCategory : (req, res) =>  {
        var category = req.body.category
    
        if (category) {
            var sql = `INSERT INTO categories VALUES (NULL, '${category}')`
        
            sqlDB.query(sql, (err, results)=>{
                if(err) {
                    console.log(err);
                    return res.status(500).send(err)
                            
                }
        
                res.status(200).send(results)
            })
    
        } else {
            res.status(500).send('Tolong isi body category')
        }
    },

    editCategory: (req,res) => {
        var dataUpdate = req.body
        var sql = `UPDATE categories SET ?
                    WHERE id = ${req.params.id};`
    
        console.log(dataUpdate);
        
        sqlDB.query(sql, dataUpdate, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    }
}