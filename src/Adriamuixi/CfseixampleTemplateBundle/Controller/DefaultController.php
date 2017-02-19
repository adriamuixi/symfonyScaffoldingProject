<?php

namespace Adriamuixi\CfseixampleTemplateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AdriamuixiCfseixampleTemplateBundle:Default:index.html.twig');
    }
}
