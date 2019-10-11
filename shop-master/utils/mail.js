'use strict';
const nodemailer = require('nodemailer');

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', // 发送方邮件
    port: 465, // 端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: "1091830282@qq.com", // 发送方邮件
        pass: "mjhlxhnolqdfgbbh" // smtp 验证码
    }
});

// 邮件信息
// let mailobj = {
//     from: '"Fred Foo 👻" <1091830282@qq.com>', // sender address
//     to: '1091830282@qq.com', // list of receivers
//     subject: '1902', // Subject line
//     text: '您的验证码是12345678，有效期五分钟', // plain text body
// html: '<b>Hello world?</b>' // html body
// };

// 发送邮件
// transporter.sendMail(mailobj, (err, data) => {
//     console.log(err);
//     console.log(data);
// });

async function send(mail, code) {
    let testAccount = await nodemailer.createTestAccount();
    if (testAccount) {
        // 邮件信息
        let mailobj = {
            from: '"Fred Foo" <1091830282@qq.com>', // sender address
            to: mail, // list of receivers
            subject: '1902', // Subject line
            text: `您的验证码是 ${code}，有效期五分钟`, // plain text body
            // html: '<b>Hello world?</b>' // html body
        };
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailobj, (err, data) => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            })
        });
    }
};

module.exports = { send };