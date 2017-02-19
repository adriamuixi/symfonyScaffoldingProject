<?php

namespace Adriamuixi\IntranetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AdriamuixiIntranetBundle:Default:index.html.twig');
    }
}
