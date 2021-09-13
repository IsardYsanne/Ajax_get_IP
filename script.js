
document.addEventListener("DOMContentLoaded",function() {

    var button = document.getElementById('send');

    button.addEventListener("click", function() {

        var name = document.getElementById('name').value;

        name = 'nameUser=' + encodeURIComponent(name); //Подготовка данных для отправки на сервер, т.е. кодирование с помощью метода encodeURIComponent

        var request = new XMLHttpRequest();

        request.open('POST','list.php',true);

        request.addEventListener('readystatechange', function() {

            if ((request.readyState==4) && (request.status==200)) {

                console.log(request);

                console.log(request.responseText);

                var welcome = document.getElementById('welcome');

                welcome.innerHTML = request.responseText; // заменить содержимое элемента ответом, пришедшим с сервера
            }
        });

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.send(name);
    });
});