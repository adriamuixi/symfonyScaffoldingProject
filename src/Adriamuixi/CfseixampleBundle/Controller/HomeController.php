<?php

namespace Adriamuixi\CfseixampleBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class HomeController
 * @package Adriamuixi\CfseixampleBundle\Controller
 */
class HomeController extends Controller
{
    /**
     * Home page.
     *
     * @param Request $request
     * @return Response
     *
     * @Route(
     *      path = "/",
     *      name = "store_homepage",
     *      methods = {"GET"},
     * )
     */
    public function indexAction(Request $request)
    {
        $hoa= 3;

        ld($hoa);

        return $this->render('AdriamuixiCfseixampleTemplateBundle:Home:home.html.twig');
    }
}
