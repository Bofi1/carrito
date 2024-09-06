(() => { 

    // variable que mantiene el estado visible del carrito
    let carritoVisible = false

    // Agregamos funcionalidad a los botones eliminar del carrito
    let botonesEliminarItem = document.getElementsByClassName("btn-eliminar")
    for (let i = 0; i < botonesEliminarItem.length; i++) {
        let button = botonesEliminarItem[i]
        button.addEventListener("click", eliminarItemCarrito)
    }


    let botonSumarCantidad = document.getElementsByClassName("plus")
    for (let i = 0; i < botonSumarCantidad.length; i++) {
        boton = botonSumarCantidad[i]
        boton.addEventListener("click", sumarCantidad)
        
    }

    let botonRestarCantidad = document.getElementsByClassName("minus")
    for (let i = 0; i < botonRestarCantidad.length; i++) {
        boton = botonRestarCantidad[i]
        boton.addEventListener("click", restarCantidad)
        
    }

    //agrego funcionalidad a los botones de agregar carrito
    let botonesAgregarCarrito = document.getElementsByClassName("addCart")
    for (let i = 0; i < botonesAgregarCarrito.length; i++) {
        let button = botonesAgregarCarrito[i]
        button.addEventListener("click",agregarAlCarritoClicked)
    }



    // Elimino el item seleccionado del carrito
    function eliminarItemCarrito(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()


        actualizarTotalCarrito()

        ocultarCarrito()
    }

    // actualizar total del carrito
    function actualizarTotalCarrito() {
        // seleccionamos total del carrito
        // seleccionamos el contenedor de los items
        let carritoItems = document.getElementsByClassName("resumenCarrito")
        let total = 0

        for (let i = 0; i < carritoItems.length; i++) {
            let item = carritoItems[i]
            let precioElemento = item.getElementsByClassName("price")[0]
            console.log(precioElemento);
            
            //quitamos el simbolo de peso y punto decimal
            let precio = parseFloat(precioElemento.innerText.replace("$","").replace(",",""))
            console.log(precio);
            let cantidadItem = document.getElementsByClassName("cantidad")[0]
            let cantidad = parseFloat(cantidadItem.innerText)
            console.log(cantidad);
            total = total + (precio * cantidad)
        }

        total = Math.round(total*100)/100
        document.getElementsByClassName("carrito-precio-total")[0].innerText = "$" + total.toLocaleString("es") + ",00"

    }

    function ocultarCarrito() {
        let carritoItems = document.getElementsByClassName("resumenCarrito")
        console.log(carritoItems.childCount);
        
    }

    function sumarCantidad(event) {
        buttonClicked = event.target
        selector = buttonClicked.parentElement
        cantidadActual = selector.querySelectorAll("div")[1].innerHTML
        console.log(cantidadActual);
        cantidadActual++
        selector.querySelectorAll("div")[1].innerHTML = cantidadActual
        

        actualizarTotalCarrito()

    }


    function restarCantidad(event) {
        buttonClicked = event.target
        selector = buttonClicked.parentElement
        cantidadActual = selector.querySelectorAll("div")[1].innerHTML
        console.log(cantidadActual);
        cantidadActual--
        selector.querySelectorAll("div")[1].innerHTML = cantidadActual
        

        actualizarTotalCarrito()

    }

    function agregarAlCarritoClicked(event) {
        let button = event.target
        let selector = button.parentElement
        let titulo = selector.getElementsByClassName("titulo-producto")[0].innerHTML // recuerda usar [0] para que no se haga un psh arrays todo pendejo
        console.log(titulo);
        let precio = selector.getElementsByClassName("precio-producto")[0].innerHTML
        let imagen = selector.getElementsByClassName("imagen-producto")[0].src
        console.log(precio);
        console.log(imagen);
        
        //esta funcion agrega el elemento al carrito. Le mando por parametros los valores
        agregarItemAlCarrito(titulo, precio, imagen)
        
    }
    
    function agregarItemAlCarrito(titulo, precio, imagen) {
        var item = document.createElement("div")
        item.classList.add ("item")
        let contenedorItem = document.getElementsByClassName
        
        // vamos a comprobar que el item que se esta seleccionando no se encuentre ya en el carrito
        let nombreItemsCarrito = document.getElementsByClassName("item-titulo")
        for (let i = 0; i < nombreItemsCarrito.length; i++) {
            if (nombreItemsCarrito[i].innerHTML == titulo) {
                alert("El item ya se encuentra en el carrito")
                return
            }
            
        }

        let itemCarritoContenido = `
            <div class="articulo">
                <h3 class="item-titulo">${titulo}</h3>
                <img src="${imagen}" alt="">
                <div class="productCountContainer">
                    <div class="minus">-</div>
                    <div class="cantidad">2</div>
                    <div class="plus">+</div>
                </div>
                <span class="price">${precio}</span>
                <span><img class="btn-eliminar"  style="width: 20px; height: 20px; margin-left: 20px;" src="./img/trashCan.png" alt=""></span>
            </div>
        `

        itemCarritoContenido = contenedor; // no definida
        
    }

    






 })()
