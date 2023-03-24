const { request, response } = require("express");
const db = require('../models');
const kategoriModel = db.Kategori;

class Admin {
    async getAllCategory(req = request, res = response) {
        try {
            const categories = await kategoriModel.findAll({
                attributes: ['id', 'kategori', 'deskripsi']
            });

            res.json(categories);
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async addCategory(req = request, res = response) {
        const { kategori, deskripsi } = req;

        try {
            await kategoriModel.create({
                kategori: kategori,
                deskripsi: deskripsi,
            });

            res.send('Kategori telah ditambahkan!');
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async deleteCategory(req = request, res = response) {
        const { categoryId } = req.body;

        try {
            await kategoriModel.destroy({
                where: {
                    id: categoryId
                }
            });

            res.send('Kategori berhasil dihapus');
        } catch (err) {
            console.log(err);
        }
    }

    async updateCategory(req = request, res = response) {
        const { categoryId, kategori, deskripsi } = req.body;

        try {
            await kategoriModel.update({
                kategori: kategori,
                deskripsi: deskripsi
            }, { where: { id: categoryId }});

            res.send('Kategori berhasil diubah');
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Admin;