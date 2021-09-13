<?php

$output = '';

if (isset($_POST['nameUser'])) {

    $name = $_POST['nameUser'];
    $output .= 'Здравствуйте, ' . $name . '! ';

    if ($_SERVER['REMOTE_ADDR']) { // добавляем в переменную output IP-адрес пользователя
        $output .= 'Ваш IP адрес: ' . $_SERVER['REMOTE_ADDR'];
    } else {
        $output .= 'Ваш IP адрес неизвестен.';
    }

    echo $output; // выводим ответ
}
