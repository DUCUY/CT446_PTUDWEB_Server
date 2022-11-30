import { giayVayVonModel } from "../models/giayVayVon.js";

const getAllGiayVayVon = async (req, res) => {
  try {
    const giayVayVon = await giayVayVonModel.find();
    res.status(200).json(giayVayVon);
  } catch (error) {
    res.status(500);
  }
};

const createGiayVayVon = async (req, res) => {

  try {
    const { email, name } = req.body;
    const check = await giayVayVonModel.findOne({ email });
    if (check) {
      res.status(400).json({ state: "failure", }); // da dk r
    } else {
      const giayVayVon = new giayVayVonModel({ email, name });
      await giayVayVon.save();
      res.status(200).json({ state: "success",giayVayVon: giayVayVon});
    }
  } catch (error) {
    res.status(500)
  }
};

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    await giayVayVonModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"Giay Vay Von was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    await giayVayVonModel.deleteMany()
    res.status(200).json(
      {message:`deleted successfully`}
    );
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong


export { getAllGiayVayVon, createGiayVayVon ,deletee,deleteeAll};
