$(document).ready(function () {


    //MENU NAVEGACION   
    $('.marca').fadeIn(9000);

    $('#icono-menu').click(() => {
        $('#menu').toggleClass('active');
        $('#icono-menu').toggleClass('cruz');
    })
    $(window).scroll(() => {
        $('#menu').addClass('active')
        $('#icono-menu').removeClass('cruz')
    })

    //CALCULADORA

    $('#boton').hover((e) => {
        $(e.target).css({ 'background-color': '#1d3557', 'color': 'silver' });
    }, () => {
        $(e.target).css({ 'background-color': 'rgb(255, 245, 238)', 'color': 'black' });
    });

    $('#boton').click(() => {
        $('.form1').slideDown(3000);
    })

    $('#volverCalcular').click(() => {
        location.reload();
    })

    //DROPDOWN

    $('#maestranza').change(() => {
        let valorM = $('#maestranza option:selected').val();
        $('#resultado0').val(valorM)
    })

    $('#auxiliar').change(() => {
        let valorA = $('#auxiliar option:selected').val();
        $('#resultado1').val(valorA)
    })

    $('#admin').change(() => {
        let valorAd = $('#admin option:selected').val();
        $('#resultado2').val(valorAd)
    })

    $('#venta').change(() => {
        let valorV = $('#venta option:selected').val();
        $('#resultado3').val(valorV)
    })

    //FORMULARIO DE CONTACTO

    $("#boton2").click(() => {

        const datosPost = { nombre: $('#nombre').val(), apellido: $('#apellido').val(), email: $('#email').val() }
        console.log(datosPost)

        $.ajax({
            method: "POST",
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: datosPost,
            success: function () {
                $('#mje').prepend(`<div class='mensaje'><p>Gracias ${datosPost.nombre}! Nos pondremos en contacto a la brevedad.</p>
                <button class="btn3" id='boton3'>Cerrar</button>  
                </div>`)
                $('#boton3').click(() => {
                    $('.mensaje').addClass('ocultar');
                })
                $("#boton2").prop('disabled', true)
            }
        });
    });
})