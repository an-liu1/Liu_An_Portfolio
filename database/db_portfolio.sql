-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2018 at 08:00 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_photo&info`
--

DROP TABLE IF EXISTS `tbl_photo&info`;
CREATE TABLE IF NOT EXISTS `tbl_photo&info` (
  `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo` varchar(20) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_photo&info`
--

INSERT INTO `tbl_photo&info` (`id`, `photo`, `description`) VALUES
(1, 'portrait_open.jpg', 'My one year of studying experience as a student (majored in front end developing) has honed my CSS3 and HTML5 skills, as well as my knowledge of responsive design and project management. I have the skills to create the perfect HTML, which makes it easy to find and fix any problems that arise later. Three years of experience in student council, getting involved in my school and faculty events with most students. Experience in entrepreneurial business and social media management when I create my own business.'),
(2, 'p1_open.png', 'This is a final project in the second semester, which is a responsive website about the movie --- STARSHIP TROOPERS. It includes JS movies\' controls, AE trailers, and a JS game, which represents the most works I learnt in this semester.'),
(3, 'slide1_open.png', 'Agency X --- this project is a single-page application that we build to introduce my team and showcase the work. An Liu and Chaochao Li cooperate together to finish this project. An Liu takes the responsibility for typing code; meanwhile, Chaochao Li is responsible for designing.'),
(4, 'slide2_open.png', 'InfoGraphic about movies --- this project is a poster which includes a lot of data about the hottest movies aomng this year. Compared with the traditional infographics, this one will add some features to make it more dynamic. In this project, it will list some information of the top 5 grossing movies, such as movie\'s name, cover image, description, and a form of grossing.'),
(5, 'slide3_open.png', 'InfoGraphic about movies --- this project is a poster which includes a lot of data about the hottest movies aomng this year. Compared with the traditional infographics, this one will add some features to make it more dynamic. In this project, it will list some information of the top 5 grossing movies, such as movie\'s name, cover image, description, and a form of grossing.'),
(6, 'slide4_open.png', 'WorldPress Project --- this is a WorldPress project which demonstrated the skills of using worldpres to build a site. Adding plugins, Adding widgets and Customizing layout.'),
(7, 'p2_open.png', 'This is a final project in the first semester, which is a static website about the myself --- My Original RESUME. It coded by HTML5 and CSS3 without andy plugins.'),
(8, 'p4_open.png', 'This is a midterm project in the second semester, which is a responsive website about my Production --- An Productivity. It highlights CSS3 Animations and some JS function.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
