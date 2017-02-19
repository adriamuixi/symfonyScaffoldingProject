<?php
/**
 * Created by PhpStorm.
 * User: adria
 * Date: 17/02/17
 * Time: 03:19
 */
namespace Adriamuixi\CfseixampleBundle\Twig;

class CfseixampleTwigExtension extends \Twig_Extension
{
    public function getFilters()
    {
        return array(

            new \Twig_SimpleFilter('price', array($this, 'priceFilter')),
            new \Twig_SimpleFilter('sha1', array($this, 'sha1')),
        );
    }

    public function priceFilter($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$'.$price;

        return $price;
    }

    /**
     * Return the sha1 of the value
     *
     * @return string The value encrypted
     */
    public function sha1($value)
    {
        return sha1($value);
    }

    public function getName()
    {
        return 'cfseixample_twig_extension';
    }
}