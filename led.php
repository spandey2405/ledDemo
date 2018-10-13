<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 13/10/18
 * Time: 5:30 PM
 */

$led_no = $_POST["id"];
$led_func = $_POST["fn"];
exec('python led.py '. $led_no .' '. $led_func .'', $output);
print_r($output);