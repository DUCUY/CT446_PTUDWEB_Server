import { giayTamHoanModel } from "../models/giayTamHoan.js";

const getAllGiayTamHoan = async (req, res) => {
  try {
    const giayTamHoan = await giayTamHoanModel.find();
    // console.log(giayTamHoan);
    res.status(200).json(giayTamHoan);
  } catch (error) {
    res.status(500);
  }
};

const createGiayTamHoan = async (req, res) => {
  try {
    const { email, name ,mssv } = req.body;
    const check = await giayTamHoanModel.findOne({ email });
    if (check) {
      res.status(400).json({ state: "failure" }); // da dk r
    } else {
      const giayTamHoan = new giayTamHoanModel({ email, name ,mssv });
      await giayTamHoan.save();
      res.status(200).json({ state: "success" ,giayTamHoan: giayTamHoan});
    }
  } catch (error) {
    res.status(500)
  }
};

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    console.log(idReq);
    await giayTamHoanModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"Giay Tam Hoan was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    await giayTamHoanModel.deleteMany()
    res.status(200).json(
      {message:`deleted successfully`}
    );
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong


export { getAllGiayTamHoan, createGiayTamHoan ,deletee,deleteeAll};
