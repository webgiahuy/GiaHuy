//script email notifikasi otomatis dengan google form
function emailkonfirmasi(e) {
  var nama=e.values[1]; //membaca email pada kolom kolom B
  var email=e.values[2]; //membaca kolom ke kolom C
  var pesan=e.values[3]; //membaca kolom kolom D

  var subject="*Pesan Anda Telah Kami Terima"; //subject yang akan tampil di email penerima

  var message=createHTMLHeader();

  message+="<div style='margin:0.5rem 0px 1rem;padding:20px;border-width:5px 1px 1px;border-style:solid;border-color:rgb(245,145,5) rgb(221,221,221)rgb(221,221,221);font-variant-numeric:inherit;font-variant-east-asian:inherit;font-stretch:inherit;line-height:inherit;vertical-align:baseline;quotes:none;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;overflow:hidden;border-radius:5px;width:auto'><font color='#000000'><div class='brand-logo' style='text-align:center'><img style='width:100px;height:100px' src='https://1.bp.blogspot.com/-Z1dA_G3X3Ro/X9SMbhKD9xI/AAAAAAAACO8/KAGlrPV2SncdnM2yXR3tzFqR08V9ebF7QCNcBGAsYHQ/s0/wendycode-logo-s300.png'/></div><br><div class='mail-body' style='width:800px;max-width:100%;margin:0 auto;box-shadow:0 20px 60px 10px rgba(0, 0, 0, 0.192);background:#fff;border-radius:7px;padding:15px;box-sizing:border-box;font-family:'Roboto';line-height:2;'><h2 style='text-align:center;'>Terima kasih...</h2><div style='font-size:16px;color:rgba(49,53,59,0.96);line-height:1.43'>Halo <b>"+nama+"</b></div><br/><div style='color:rgba(49,53,59,0.96);font-size:14px;font-weight:normal;line-height:1.4;margin:0 0 18px'>Terima kasih telah telah menghubungi kami.<br/>kami ingin memberitahu bahwa pesan anda telah kami terima<br/>mohon ketersedian anda untuk menunggu, kami akan segera merespon pesan anda. <br/><br/><i>berikut terlampir data anda di bawah ini:</i><br/><br/><div style='background:#eee;padding:10px;border-radius:7px'>nama : "+nama+" <br/><br/>email : "+email+"<br/><br/>pesan : "+pesan+"</div><br/>Hormat kami,<br/>Wendy | <A <a href='https://www.choipanwendy.com'style='text-decoration:none;color:#f09800;' target='_blank'>www.choipanwendy.com</a> | <a href='https://www.wendycode.com'style='text-decoration:none;color:#f09800;' target='_blank'>www.wendycode.com</a></div>";


  message+=createHTMLFooter();

  MailApp.sendEmail({to:email,
                     subject:subject,
                     htmlBody:message,
                     name:"WENDY CODE" //nama yang akan tampil di email penerima
                    });
}

//script untuk membuat email notifikasi ke email anda sebagai pemilik formulir online
function emailNotifikasi(e) {
var nama=e.values[1]; //membaca email pada kolom kolom B
var email=e.values[2]; //membaca kolom ke kolom C
var pesan=e.values[3]; //membaca kolom kolom D

  var subject="kontak form wendy code"; //subject yang akan tampil di email kita

  var message=createHTMLHeader();

  message+="<div style='margin:0.5rem 0px 1rem;padding:20px;border-width:5px 1px 1px;border-style:solid;border-color:rgb(245,145,5) rgb(221,221,221)rgb(221,221,221);font-variant-numeric:inherit;font-variant-east-asian:inherit;font-stretch:inherit;line-height:inherit;vertical-align:baseline;quotes:none;background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;overflow:hidden;border-radius:5px;width:auto'><font color='#000000'><div class='brand-logo' style='text-align:center'><img style='width:100px;height:100px' src='https://1.bp.blogspot.com/-Z1dA_G3X3Ro/X9SMbhKD9xI/AAAAAAAACO8/KAGlrPV2SncdnM2yXR3tzFqR08V9ebF7QCNcBGAsYHQ/s0/wendycode-logo-s300.png'/></div><br><div class='mail-body' style='width:800px;max-width:100%;margin:0 auto;box-shadow:0 20px 60px 10px rgba(0, 0, 0, 0.192);background:#fff;border-radius:7px;padding:15px;box-sizing:border-box;font-family:'Roboto';line-height:2;'><h2 style='text-align:center;'>Pesan Baru Di Terima...</h2><div style='font-size:16px;color:rgba(49,53,59,0.96);line-height:1.43'>Halo <b>pak bos</b></div><br/><div style='color:rgba(49,53,59,0.96);font-size:14px;font-weight:normal;line-height:1.4;margin:0 0 18px'>Ada pesan baru masuk ni. <br/><br/><i>berikut terlampir data pengirim di bawah ini:</i><br/><br/><div style='background:#eee;padding:10px;border-radius:7px'>nama: "+nama+" <br/><br/>email: "+email+"<br/><br/>pesan: "+pesan+"</div></div>";



  message+=createHTMLFooter();

  MailApp.sendEmail({
    to:"choipan.wendy@gmail.com",
    subject:subject,
    htmlBody:message,
    name:"kontak form wendy code"
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
