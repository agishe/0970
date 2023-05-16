<?php

class Person 
{
  private $name; 
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }
  function sayHi($name) 
  {
    return "Hi, $name, I`m " . $this->name;
  }
  function setHP($hp) {
    if ($this->hp + $hp > 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHP() {
    return $this->hp;
  }
  function getName() {
    return $this->name;
  }
  function getLastname() {
    return $this->lastname;
  }
  function getAge() {
    return $this->age;
  }
  function getMother() {
    return $this->mother;
  }
  function getFather() {
    return $this->father;
  }
  function getInfo() {
    return "<h3>A few words about myself:</h3><br>" . "My name is: " . $this->getName()
    . "<br>My lastname is: " . $this->getLastname()
    . "<br>My father's name is: " . $this->getFather()->getName()
    . "<br>My father's lastname is: " . $this->getFather()->getLastname()
    . "<br>My Mother's name is: " . $this->getMother()->getName()
    . "<br>My Mother's lastname is: " . $this->getMother()->getLastname()
    . "<br>My maternal grandmother's name is: " . $this->getMother()->getMother()->getName()
    . "<br>My maternal grandmother's lastname is: " . $this->getMother()->getMother()->getLastname()
    . "<br>My maternal grandfather's name is: " . $this->getMother()->getFather()->getName()
    . "<br>My maternal grandfather's lastname is: " . $this->getMother()->getFather()->getLastname()
    . "<br>My paternal grandmother's name is: " . $this->getFather()->getMother()->getName()
    . "<br>My paternal grandmother's lastname is: " . $this->getFather()->getMother()->getLastname()
    . "<br>My paternal grandfather's name is: " . $this->getFather()->getFather()->getName()
    . "<br>My paternal grandfather's lastname is: " . $this->getFather()->getFather()->getLastname();
  }
}

$marat_older = new Person("Marat", "Kadyrov", 80, $tasya, $mustafa);
$vera = new Person("Vera", "Kadyrova", 75, $nastya, $vasiliy);
$natalia = new Person("Natalia", "Romantsova", 73, $katya, $ivan);
$yura = new Person("Yura", "Romantsov", 71, $sasha, $kolya);
$marat = new Person("Marat", "Kadyrov", 51, $vera, $marat_older);
$nina = new Person("Nina", "Kadyrova", 49, $natalia, $yura);
$maria = new Person("Maria", "Kadyrova", 25, $nina, $marat);

echo $maria->getInfo();
