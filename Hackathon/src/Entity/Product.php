<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $desct;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesct(): ?string
    {
        return $this->desct;
    }

    public function setDesct(?string $desct): self
    {
        $this->desct = $desct;

        return $this;
    }
}
