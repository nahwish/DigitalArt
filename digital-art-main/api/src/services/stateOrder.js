const { EMAIL_ENVIAR, EMAIL_SENGRID } = process.env;


let stateOrder = (name2, ordIdDateStateTotal, prodsImgPrice, email) => {

    var msg = {};

    if(!!name2 && prodsImgPrice.length !==0){
        
        msg["to"] = `${email}`,
        msg["from"] = `${EMAIL_SENGRID}`,
        msg["subject"] = "DigitalArt: Orden Completada",
        msg["html"] = `
        <body style="margin: 0; padding: 0;">
            <td class="conteiner1" bgcolor="#ffffff" style="padding: 40px 40px 40px 40px; ">
                <table border="0" align="center" cellpadding="0" cellspacing="0" width="500px" class="content" style=" border: 1px solid #bcbdbc;">
                
                    <tr>
                        <td class="conteinerLogo" bgcolor="#202020" align="center" style="padding: 20px 0px 15px 0px; border: 1px solid #202020;" width="510px">
                            <img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/logo%2FLogo%20digitalart%20rec.png?alt=media&token=dc54f636-5140-4489-b5d0-832c665ae9b4" alt="DigitalArt Logo" width="300"  style="display: block; border-radius: 5px;" /> 
                        </td>
                    </tr>

                    <tr >
                        <td class="conteinerLogo"  style="padding: 10px 40px 10px 40px; font-family: Arial, sans-serif; margin: 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px 0px 10px 0px;">
                                <tr>
                                    <td class="aTotal" bgcolor="#153643" style="padding: 15px 10px 10px 15px;  border-radius: 5px;">
                                        <h4 style="line-height: 30px; color: #ffffff; ">
                                            ${name2}: DigitalArt te informa que tu orden ID:${ordIdDateStateTotal[0]}, con fecha de creación ${ordIdDateStateTotal[1]} se encuentra en estado ${ordIdDateStateTotal[2]}
                                        </h4>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="conteinerProductos" bgcolor="#ffffff" style="padding: 20px 40px 20px 40px" >

                        ${prodsImgPrice.map((m) => {
                            return(`
                                <div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #bcbdbc; padding: 10px 20px 20px 20px; border-radius: 5px 5px 0px 0px;">
                                    
                                        <td 
                                        class="aProduct"
                                            width="100"
                                            valign="top"
                                            align="center"
                                            style=" color: #153643; font-family: Arial, sans-serif; font-size: 18px;"
                                        >
                                            <h3 style="margin: 5px 5px 5px 10px;">
                                                ${m.product}
                                            </h3>
                                        </td>

                                        <tr>        
                                            <td class="aImage" width="350"  valign="top" align="center">
                                                <img
                                                src="${m.preview}" 
                                                alt="${m.product}" 
                                                style="
                                                    box-shadow: 1px 2px 10px black;
                                                    border-radius: 5px;
                                                    margin: 10px;
                                                "
                                                width="90%"
                                                align="center"
                                                />
                                            </td>         
                                        </tr>

                                        <tr>
                                            <td
                                                class="aPrice"
                                                width="100"
                                                valign="top"
                                                
                                                style=" color: #153643; font-family: Arial, sans-serif; font-size: 18px;"
                                            >
                                                <h4 style="padding: 7px 5px 5px 20px; margin:0px;" >
                                                    precio: $${m.price}
                                                </h4>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td class="aLink" bgcolor="#153643" style="border-radius: 0px 0px 5px 5px;">
                                                <h5 align="center" style="padding: 20px 0px 20px 0px; margin: 0px">
                                                    <a href="${m.image}">
                                                        <button style="width: 110px; height: 30px; border-radius: 5px;box-shadow:  0px 1px 7px black; border:1px solid rgb(149, 146, 146); cursor: pointer;">
                                                            Download Link
                                                        </button>
                                                    </a>
                                                
                                                </h5>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                `
                            )
                        })}
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px 0px 20px 0px;">
                                <tr>
                                    <td class="aTotal" bgcolor="#153643" style="padding: 25px 30px 10px 25px;  border-radius: 5px;">
                                        <h4 style="font-family: Arial, sans-serif; color: #ffffff; " >
                                            Valor Total de la compra: $${ordIdDateStateTotal[3]}
                                        </h4>
                                    
                                        <h3 style="font-family: Arial, sans-serif; color: #ffffff; " >
                                            Gracias por tu Compra!
                                        </h3>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                            
                    <tr>
                        <td class="conteinerContact" bgcolor="#ee4c50"  style="padding: 20px 30px 40px 30px" >
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                            <td class="basesCond" width="60%" style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
            
                                &reg; Someone, somewhere 2021<br/>
                                
                                <a href="#" style="color: #ffffff;">
                                <font color="#ffffff">
                                    Unsubscribe
                                </font>
                                </a>
                                to this newsletter instantly
                                
                            </td>
            
                            <td class="linksContacts" align="center">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td class="aContact">
                                        <a href="http://www.twitter.com/">
                                            <img
                                            src="https://pbs.twimg.com/profile_images/1354502907643666435/CpGOlLK-_400x400.jpg"
                                            alt="Twitter"
                                            width="38"
                                            height="38"
                                            style="display: block"
                                            border="0"
                                            />
                                        </a>
                                        </td>
            
                                        <td class="spaceContact" style="font-size: 0; line-height: 0" width="20">
                                        &nbsp;
                                        </td>
            
                                        <td class="aContact">
                                        <a href="http://www.twitter.com/">
                                            <img
                                            src="https://pbs.twimg.com/profile_images/1354502907643666435/CpGOlLK-_400x400.jpg"
                                            alt="Facebook"
                                            width="38"
                                            height="38"
                                            style="display: block;"
                                            border="0"
                                            />
                                        </a>
                                        </td>
                                    </tr>
                                    </table>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>

                </table>
            </td>
        </body>

        `
        return msg
    }
    else{
        msg["Error"]="incomplete data"
        return (msg)
    } 

}

module.exports = stateOrder;