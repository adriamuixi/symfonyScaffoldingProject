<?php

namespace Adriamuixi\BotigaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function indexAction()
    {
        return $this->render('AdriamuixiBotigaBundle:Default:index.html.twig');
    }
}
