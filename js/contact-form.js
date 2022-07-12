//Tập lệnh email thông báo tự động với google biểu mẫu
function emailkonfirmasi(e) {
  var name=e.values[1]; //Đọc email trong cột B
  var email=e.values[2]; //Đọc cột này sang cột C
  var pesan=e.values[3]; //Đọc cột D

  var subject="*Chúng tôi đã nhận được tin nhắn của bạn"; //Chủ đề sẽ xuất hiện trong email của người nhận

  var message=createHTMLHeader();

  message+="<div style='margin:0.5rem 0px 1rem;padding:20px;border-width:5px 1px 1px;border-style:solid;border-color:rgb(245,145,5) rgb(221,221,221)rgb(221,221,221);font-variant-numeric:inherit;font-variant-east-asian:inherit;font-stretch:inherit;line-height:inherit;vertical-align:baseline;quotes:none;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;overflow:hidden;border-radius:5px;width:auto'><font color='#000000'><div class='brand-logo' style='text-align:center'><img style='width:100px;height:100px' src='https://cdn.giahuy.net/img/logo.png'/></div><br><div class='mail-body' style='width:800px;max-width:100%;margin:0 auto;box-shadow:0 20px 60px 10px rgba(0, 0, 0, 0.192);background:#fff;border-radius:7px;padding:15px;box-sizing:border-box;font-family:'Roboto';line-height:2;'><h2 style='text-align:center;'>Cảm ơn bạn!</h2><div style='font-size:16px;color:rgba(49,53,59,0.96);line-height:1.43'>Xin chào <b>"+name+"</b></div><br/><div style='color:rgba(49,53,59,0.96);font-size:14px;font-weight:normal;line-height:1.4;margin:0 0 18px'>Cám ơn bạn đã liên lạc với chúng tôi.<br/>Chúng tôi muốn thông báo với bạn rằng chúng tôi đã nhận được tin nhắn của bạn<br/>Xin vui lòng chờ đợi, chúng tôi sẽ ngay lập tức trả lời tin nhắn của bạn. <br/><br/><i>Đây là thông tin của bạn được đính kèm bên dưới:</i><br/><br/><div style='background:#eee;padding:10px;border-radius:7px'>Họ tên: "+name+" <br/><br/>Email: "+email+"<br/><br/>Nội dung: "+pesan+"</div><br/>Trân trọng,<br/>Gia Huy | <a href='https://www.giahuy.net'style='text-decoration:none;color:#f09800;' target='_blank'>www.giahuy.net</a> | <a href='https://www.giahuy.net'style='text-decoration:none;color:#f09800;' target='_blank'>www.giahuy.net</a></div>";


  message+=createHTMLFooter();

  MailApp.sendEmail({to:email,
                     subject:subject,
                     htmlBody:message,
                     name:"GIA HUY" //Tên sẽ xuất hiện trong email của người nhận
                    });
}

//Tập lệnh để tạo thông báo qua email đến email của bạn với tư cách là chủ sở hữu của biểu mẫu trực tuyến
function emailNotifikasi(e) {
var name=e.values[1]; //Đọc email trong cột B
var email=e.values[2]; //Đọc cột này sang cột C
var pesan=e.values[3]; //Đọc cột D

  var subject="Biểu mẫu liên hệ Gia Huy"; //Chủ đề sẽ xuất hiện trong email của chúng tôi

  var message=createHTMLHeader();

  message+="<div style='margin:0.5rem 0px 1rem;padding:20px;border-width:5px 1px 1px;border-style:solid;border-color:rgb(245,145,5) rgb(221,221,221)rgb(221,221,221);font-variant-numeric:inherit;font-variant-east-asian:inherit;font-stretch:inherit;line-height:inherit;vertical-align:baseline;quotes:none;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;overflow:hidden;border-radius:5px;width:auto'><font color='#000000'><div class='brand-logo' style='text-align:center'><img style='width:100px;height:100px' src='https://cdn.giahuy.net/img/logo.png'/></div><br><div class='mail-body' style='width:800px;max-width:100%;margin:0 auto;box-shadow:0 20px 60px 10px rgba(0, 0, 0, 0.192);background:#fff;border-radius:7px;padding:15px;box-sizing:border-box;font-family:'Roboto';line-height:2;'><h2 style='text-align:center;'>Tin nhắn mới đã nhận ...</h2><div style='font-size:16px;color:rgba(49,53,59,0.96);line-height:1.43'>Xin chào <b>admin</b></div><br/><div style='color:rgba(49,53,59,0.96);font-size:14px;font-weight:normal;line-height:1.4;margin:0 0 18px'>Có một tin nhắn mới ở đây. <br/><br/><i>Phần sau được đính kèm dữ liệu của người gửi bên dưới:</i><br/><br/><div style='background:#eee;padding:10px;border-radius:7px'>Họ tên: "+name+" <br/><br/>email: "+email+"<br/><br/>pesan: "+pesan+"</div></div>";



  message+=createHTMLFooter();

  MailApp.sendEmail({
    to:"webgiahuy@gmail.com",
    subject:subject,
    htmlBody:message,
    name:"Biểu mẫu liên hệ Gia Huy"
  });
}

function createHTMLHeader(){
  var html="<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>";
  html+="<html xmlns='https://www.w3.org/1999/xhtml'>";
  html+="<head>";
  html+="<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />";
  html+="</head>";
  html+="<body>";
  return html;
}

function createHTMLFooter(){
  var html="</body>";
  html+="</html>";
  return html;
}
