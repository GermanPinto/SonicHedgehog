            //document.write(<h3>Ingrese datos de Personaje</h3>)
        /*    var nombre = prompt('ingrese nombre personaje');
            var lugarNacimiento= prompt('ingrese lugar nacimiento');
            var especie= prompt("ingrese 'especie'");
            var poder= prompt("ingrese poder principal");*/

            var nombre = document.getElementById("nombre").value;
            var lugarNacimiento= document.getElementById("nacimiento").value;
            var especie= document.getElementById("especie").value;
            var poder= document.getElementById("poder").value;

            var cuerpoTabla="";

            var cabeceraTabla=`
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Lugar Nacimiento</th>
                <th scope="col">Especie</th>
                <th scope="col">Poder</th>
              </tr>
            </thead>
            <tbody id="cuerpoTabla">
            </tbody>`;
            document.getElementById("miTabla").innerHTML=cabeceraTabla;


            var llenado=function(e){
                 nombre = document.getElementById("nombre").value;
                 validarNombre(nombre);
                 lugarNacimiento= document.getElementById("nacimiento").value;
                 especie= document.getElementById("especie").value;
                 poder= document.getElementById("poder").value;
             cuerpoTabla=cuerpoTabla+`
            <tr>
              <td>${nombre}</td>
              <td>${lugarNacimiento}</td>
              <td>${especie}</td>
              <td>${poder}</td>
            </tr>
          `;
          document.getElementById("cuerpoTabla").innerHTML=cuerpoTabla;
          e.preventDefault();
        }

        function validarNombre(nombre){
            if(nombre==0 || nombre==null||nombre==""){
                alert("Debe ingresar obligatoriamente un nombre")
            }
        }

            var formulario= document.getElementById("miFormulario");
            formulario.addEventListener("submit",llenado);

           /* document.write(
            <tbody>
              <tr>
                <td>${nombre}</td>
                <td>${lugarNacimiento}</td>
                <td>${especie}</td>
                <td>${poder}</td>
              </tr>

            </tbody>
            
            `);*/
