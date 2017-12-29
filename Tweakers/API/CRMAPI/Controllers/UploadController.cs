using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CRMAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
   
    public class UploadController : ApiController
    {

        [HttpPost]
        [Route("api/Upload/Save")]        
        public void Save(HttpContext UploadDefault)
        {
            //var result = new ResultDto();
            try
            {
                HttpRequest request = UploadDefault.Request;
                HttpFileCollection uploadedFiles = UploadDefault.Request.Files;

                //for (int i = 0; i < uploadedFiles.Count; i++)
                //{
                //    var fileName = (Path.GetFileNameWithoutExtension(uploadedFiles[0].FileName) + "_" + DateTime.Now.ToString("yyyyMMddHHmmssffff") +
                //        Path.GetExtension(uploadedFiles[0].FileName)).Replace(" ", "_");

                //    var path = @"C:\Users\manikandan.selvaraj\source\repos\CRM\CRM\Content\UploadedFiles\Images";

                //    if (Directory.Exists(path) == false)
                //    {
                //        Directory.CreateDirectory(path);
                //    }

                //    var destinationPath = Path.Combine(path, fileName);

                //    uploadedFiles[0].SaveAs(destinationPath);
                //    result.IsSucess = true;
                //    result.FileName = uploadedFiles[0].FileName;
                //    result.Data = new ParseImage().ClassVisionAPIUploadForTags(destinationPath);


                //}
            }
            catch (Exception e)
            {
                //result.IsSucess = false;
            }

            //return result;
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Upload/Test")]
        [HttpGet]
        public string Test()
        {
            return "Success";
        }
    }
    //}
}
