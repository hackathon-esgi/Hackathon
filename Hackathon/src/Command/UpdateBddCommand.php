<?php

    namespace App\Command;
    use App\Entity\Product;
    use Doctrine\Common\Persistence\ObjectManager;
    use Symfony\Component\Console\Command\Command;
    use Symfony\Component\Console\Input\InputArgument;
    use Symfony\Component\Console\Input\InputInterface;
    use Symfony\Component\Console\Output\OutputInterface;
    use Symfony\Component\Console\Question\Question;
    use Symfony\Component\Console\Input\InputOption;
    use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
    use Doctrine\ORM\EntityManagerInterface;
    use Symfony\Component\Validator\Validator\ValidatorInterface;

    class UpdateBddCommand extends Command {

        private $em;
        public function __construct(EntityManagerInterface $em)
        {
            $this->em = $em;
            parent::__construct();
        }

        protected function configure () {
            // On set le nom de la commande
            $this->setName('app:updateBd');

            // On set la description
            $this->setDescription("Permet juste de faire un test dans la console");

            // On set l'aide
            $this->setHelp("Je serai affiche si on lance la commande app/console app:test -h");

        }

        public function execute (InputInterface $input, OutputInterface $output) {
            $pro = new Product();
            $pro.setDesct("dldldss");
            $this->em->persist($pro);
            $this->em->flush();
            $output->writeln('esdsdqd!');
        }
    }