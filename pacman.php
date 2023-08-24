<?php
require "vector2Int.php";
require "cellconfig.php";
class Programm
{
    private $pacmanPosition;
    private $path = 'map.txt';

    public function __construct()
    {
        $this->pacmanPosition = new Vector2Int(0, 0);
    }

    public function readMap()
    {
        $mapString = file_get_contents($this->path);
        $map = [];
        $rows = explode("\n", $mapString);

        for ($i = 0; $i < count($rows); $i++) {
            $map[$i] = str_split($rows[$i]);
        }

        return $this->reverseMap($map);
    }

    private function reverseMap($map)
    {
        $mapReverse = [];
        $maxLength = $this->getRowLength($map);

        for ($y = 0; $y < count($map); $y++) {
            for ($x = 0; $x < $maxLength; $x++) {
                $mapReverse[$x][$y] = $map[$y][$x];
            }
        }
        return $mapReverse;
    }

    private function getRowLength($map)
    {
        $maxLength = 0;

        for ($i = 0; $i < count($map); $i++) {
            $rowLength = count($map[$i]) - 1;
            if ($maxLength < $rowLength) {
                $maxLength = $rowLength;
            }
        }

        return $maxLength;
    }

    public function drawMap($currentMap,$cell)
    {
        for ($x=0; $x < count($currentMap); $x++) { 
            echo '<div>';
            for ($y=0; $y < count($currentMap[0]); $y++) { 
                $classKey = $cell[$currentMap[$x][$y]];
                $positionKey = $x.'-'.$y;
                echo '<span class="'.$classKey.'" id="'.$positionKey.'"></span>';
            }   
            echo '</div>';
        }
    }

    public function drawPlayer()
    {
        
    }
}
$programm = new Programm;
$currentMap = $programm->readMap();
$programm->drawMap($currentMap,$cell);
