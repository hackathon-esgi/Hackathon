<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
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
    private $nbArticle;

    /**
     * @ORM\Column(type="integer")
     */
    private $indiceConfiance;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $topic;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SubCategory", mappedBy="category", orphanRemoval=true)
     */
    private $subCategories;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\KeyWord", mappedBy="categories")
     */
    private $keyWords;

    public function __construct()
    {
        $this->subCategories = new ArrayCollection();
        $this->keyWords = new ArrayCollection();
    }

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

    public function getNbArticle(): ?int
    {
        return $this->nbArticle;
    }

    public function setNbArticle(int $nbArticle): self
    {
        $this->nbArticle = $nbArticle;

        return $this;
    }

    public function getIndiceConfiance(): ?int
    {
        return $this->indiceConfiance;
    }

    public function setIndiceConfiance(int $indiceConfiance): self
    {
        $this->indiceConfiance = $indiceConfiance;

        return $this;
    }

    public function getTopic(): ?string
    {
        return $this->topic;
    }

    public function setTopic(string $topic): self
    {
        $this->topic = $topic;

        return $this;
    }

    /**
     * @return Collection|SubCategory[]
     */
    public function getSubCategories(): Collection
    {
        return $this->subCategories;
    }

    public function addSubCategory(SubCategory $subCategory): self
    {
        if (!$this->subCategories->contains($subCategory)) {
            $this->subCategories[] = $subCategory;
            $subCategory->setCategory($this);
        }

        return $this;
    }

    public function removeSubCategory(SubCategory $subCategory): self
    {
        if ($this->subCategories->contains($subCategory)) {
            $this->subCategories->removeElement($subCategory);
            // set the owning side to null (unless already changed)
            if ($subCategory->getCategory() === $this) {
                $subCategory->setCategory(null);
            }
        }

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
            $keyWord->setCategories($this);
        }

        return $this;
    }

    public function removeKeyWord(KeyWord $keyWord): self
    {
        if ($this->keyWords->contains($keyWord)) {
            $this->keyWords->removeElement($keyWord);
            // set the owning side to null (unless already changed)
            if ($keyWord->getCategories() === $this) {
                $keyWord->setCategories(null);
            }
        }

        return $this;
    }
}
