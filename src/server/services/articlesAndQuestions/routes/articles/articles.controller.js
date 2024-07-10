import Article from "../../../../database/models/Article";
import upload from "../../../../database/custom/multer";

export const createArticle = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { id, title, author, description, email, username } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : '';

        try {
            const newArticle = new Article({
                id,
                title,
                photo,
                author,
                description,
                email,
                username
            });

            await newArticle.save();
            res.status(201).json({ message: 'Article created successfully', article: newArticle });
        } catch (error) {
            res.status(500).json({ message: 'Error creating article', error });
        }
    });
};