var btn=document.getElementById("btn");
var info=document.getElementById("data");

btn.addEventListener("click",function()
{
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload=function()
                      {
                        var ourData=ourRequest.responseText;
                        var newData=JSON.parse(ourRequest.responseText);
                        console.log(ourData);
                         for(i=0;i<newData.length;i++)
                        {
                            let htmlCode="<h5>" + newData[i].name+" is a "+newData[i].species+" that likes to eat ";
                            for (var j=0;j<newData[i].foods.likes.length;j++)
                            {
                                htmlCode+=newData[i].foods.likes[j]+" and ";
                            }
                            htmlCode+=" dislikes ";
                            for(var k=0;k<newData[i].foods.dislikes.length;k++)
                            {
                                if(newData[i].foods.dislikes.length-1==k)
                                {
                                    htmlCode+=newData[i].foods.dislikes[k];
                                }
                                else
                                {
                                    htmlCode+=newData[i].foods.dislikes[k]+" and ";
                                }
                            }
                            htmlCode+="</h5>";
                            info.insertAdjacentHTML("beforebegin",htmlCode);   
                        }
                    }
    ourRequest.send();
});