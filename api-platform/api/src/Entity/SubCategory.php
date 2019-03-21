<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\SubCategoryRepository")
 */
class SubCategory
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $scoreSociale;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbArticle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="subCategories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\KeyWord", mappedBy="subCategories")
     */
    private $keyWords;

    public function __construct()
    {
        $this->keyWords = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScoreSociale(): ?int
    {
        return $this->scoreSociale;
    }

    public function setScoreSociale(int $scoreSociale): self
    {
        $this->scoreSociale = $scoreSociale;

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|KeyWord[]
     */
    public function getKeyWords(): Collection
    {
        return $this->keyWords;
    }

    public function addKeyWord(KeyWord $keyWord): self
    {
        if (!$this->keyWords->contains($keyWord)) {
            $this->keyWords[] = $keyWord;
            $keyWord->setSubCategories($this);
        }

        return $this;
    }

    public function removeKeyWord(KeyWord $keyWord): self
    {
        if ($this->keyWords->contains($keyWord)) {
            $this->keyWords->removeElement($keyWord);
            // set the owning side to null (unless already changed)
            if ($keyWord->getSubCategories() === $this) {
                $keyWord->setSubCategories(null);
            }
        }

        return $this;
    }
}
