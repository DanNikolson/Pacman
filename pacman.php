<?php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Cursor;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\vector2Int;

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

    public function execute(InputInterface $input, OutputInterface $output)
    {

        $cursor = new Cursor($output);

        $cursor->moveToPosition(7, 11);

        $output->write('My text');
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
        print_r($mapReverse);
        $this->clearConsole();
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

    private function clearConsole()
    {
        define("CLEAR_KEY", "\e[H\e[J");
        echo CLEAR_KEY;
    }

    private function drawPacman()
    {
        
    }
}
$programm = new Programm;
$programm->readMap();
