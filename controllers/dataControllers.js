import DataModel from "../models/Datamodel.js";

// Store Data
export const storeData = async (req, res) => {
    try {
        const {name, answers, score } = req.body;
        // console.log(req.body);
        const newData = new DataModel({name, answers, score });
        await newData.save();
        console.log("save");
        res.status(201).json({ message: "Data stored successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error storing data", error });
    }
};

// Get Data
export const getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};
