<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\KeyWordRepository")
 */
class KeyWord
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $score;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbArticle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SubCategory", inversedBy="keyWords")
     */
    private $subCategories;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="keyWords")
     * @ORM\JoinColumn(nullable=false)
     */
    private $categories;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getNbArticle(): ?int
    {
        return $this->nbArticle;
    }

    public function setNbArticle(int $nbArticle): self
    {
        $this->nbArticle = $nbArticle;

        return $this;
    }

    public function getSubCategories(): ?SubCategory
    {
        return $this->subCategories;
    }

    public function setSubCategories(?SubCategory $subCategories): self
    {
        $this->subCategories = $subCategories;

        return $this;
    }

    public function getCategories(): ?Category
    {
        return $this->categories;
    }

    public function setCategories(?Category $categories): self
    {
        $this->categories = $categories;

        return $this;
    }
}
