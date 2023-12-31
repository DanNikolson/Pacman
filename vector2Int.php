<?php

class Vector2Int
{
    private $x;
    private $y;

    function __construct(int $x, int $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function getX()
    {
        return $this->x;
    }
    public function getY()
    {
        return $this->y;
    }
}
