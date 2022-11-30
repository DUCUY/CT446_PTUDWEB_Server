import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  try {
    const payload = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "triuy2812@gmail.com", // generated ethereal user
        pass: "fgcvaaeduaxrpqpj", // generated ethereal password
      },
    });

    const mailOption = {
      from: `triuy2812@gmail.com`, // sender address
      to: `${payload.email}`, // list of receivers
      subject: "Thông báo về việc đăng ký giấy xác nhận ✔", // Subject line
      text: "Xin chào,", // plain text body
      html: "<b>Chúc mừng bạn đã đăng ký thành công.</b> <p>Vui lòng đến phòng Công tác Sinh viên nhận giấy vào đúng thời gian đã hẹn.</p>", // html body
    };
    transporter.sendMail(mailOption, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(500).json({ message: "thành công" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { sendMail };
