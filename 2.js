<script type="text/javascript">
function reverseString(str) {
    return str.split("").reverse().join("");
    }
      const query = window.location.search;
        const fileName = query.substring(1);      
          const newLink = reverseString(fileName)

 document.getElementById('status').innerHTML = "Your Download Will Start Soon...Please wait";
   function onstartt(){
      setTimeout(gotoo, 6000);
           }
                  function gotoo(){
                    document.getElementById('status').innerHTML ="<b>Scroll Down and Click on Download Now Button</b>";
                    document.getElementById('dwnn').innerHTML ="<a class='button' href='"+newLink+"' target='_blank'>Download Now</a>";
                      }
                          onstartt();
    
            </script>
