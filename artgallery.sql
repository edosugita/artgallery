-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 04:26 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artgallery`
--

-- --------------------------------------------------------

--
-- Table structure for table `arts`
--

CREATE TABLE `arts` (
  `id_art` int(11) NOT NULL,
  `uuid_art` varchar(255) NOT NULL,
  `uuid_user` varchar(255) NOT NULL,
  `artname` varchar(50) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `dimension` text NOT NULL,
  `discount` varchar(5) DEFAULT NULL,
  `date_start_bid` date DEFAULT NULL COMMENT 'Tanggal Bid Dimulai',
  `clock_start_bid` time DEFAULT NULL COMMENT 'Waktu Bid Dimulai',
  `date_end_bid` date DEFAULT NULL COMMENT 'Tanggl Bid Diakhiri',
  `clock_end_bid` time DEFAULT NULL COMMENT 'Waktu Bid Diakhiri',
  `bid_price` int(11) DEFAULT NULL COMMENT 'Harga Untuk Start Bid',
  `price` int(11) DEFAULT NULL COMMENT 'Harga Asli',
  `kategori` text NOT NULL,
  `label` enum('bid','discount','sell') NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1' COMMENT '1 = Gambar tersedia, 0 = Gambar tidak tersedia',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `arts`
--

INSERT INTO `arts` (`id_art`, `uuid_art`, `uuid_user`, `artname`, `slug`, `description`, `image`, `dimension`, `discount`, `date_start_bid`, `clock_start_bid`, `date_end_bid`, `clock_end_bid`, `bid_price`, `price`, `kategori`, `label`, `status`, `created_at`, `updated_at`) VALUES
(1, 'fee8c4c1-f5f5-4607-88dc-83e0ae503e5c', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Satu', 'data-satu', 'deskripsi data satu hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Abstract,Manga,Collage technique', 'sell', '1', '2023-05-07 12:27:23', '2023-05-07 12:27:23'),
(2, '816cddfe-fba3-43d4-bf0e-c167589d13e4', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Dua', 'data-dua', 'deskripsi data dua hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Abstract,Manga,Collage technique', 'sell', '1', '2023-05-07 12:27:30', '2023-05-07 12:27:30'),
(3, '75c3c2ad-9a3d-4228-b616-9dd07f7e55de', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tiga', 'data-tiga', 'deskripsi data tiga hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Abstract,Manga,Collage technique', 'sell', '1', '2023-05-07 12:27:35', '2023-05-07 12:27:35'),
(4, 'f06fff3a-ba2b-4980-b78b-275694bbaff3', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Empat', 'data-empat', 'deskripsi data empat hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Abstract,Manga,Collage technique', 'sell', '1', '2023-05-07 12:27:41', '2023-05-07 12:27:41'),
(5, '7a753528-165f-459e-9971-78774d4252f5', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Lima', 'data-lima', 'deskripsi data lima hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Abstract,Manga,Collage technique', 'sell', '1', '2023-05-07 12:27:49', '2023-05-07 12:27:49'),
(6, 'b31d8aea-9b96-4639-99ce-7e8f11122d88', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Enam', 'data-enam', 'deskripsi data enam hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Realism,Manga,Collage technique', 'sell', '1', '2023-05-07 12:28:07', '2023-05-07 12:28:07'),
(7, '4197cdf0-5a9c-4d12-b214-d8b533ef7080', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tujuh', 'data-tujuh', 'deskripsi data tujuh hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Realism,Manga,Collage technique', 'sell', '1', '2023-05-07 12:28:10', '2023-05-07 12:28:10'),
(8, '81c4199a-59b1-4873-821a-1f167c14e08a', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Delapan', 'data-delapan', 'deskripsi data delapan hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Realism,Manga,Collage technique', 'sell', '0', '2023-05-07 12:28:16', '2023-05-07 12:28:16'),
(9, '04790f9a-0749-45e6-9d5d-9ecda58f7951', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sembilan', 'data-sembilan', 'deskripsi data sembilan hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Realism,Manga,Collage technique', 'sell', '1', '2023-05-07 12:28:21', '2023-05-07 12:28:21'),
(10, '74339be1-9e96-40fe-b00f-bcc5b043e053', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sepuluh', 'data-sepuluh', 'deskripsi data sepuluh hanya sebagai contoh', 'Image.png', '10 x 10', NULL, NULL, NULL, NULL, NULL, NULL, 10000000, 'Realism,Manga,Collage technique', 'sell', '1', '2023-05-07 12:28:31', '2023-05-07 12:28:31'),
(11, '7f123614-e035-4491-be9c-153d074c0dfb', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Satu Bid', 'data-satu-bid', 'deskripsi data satu bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Realism,Manga,Collage technique', 'bid', '1', '2023-05-07 12:54:00', '2023-05-07 12:54:00'),
(12, '5ca23489-6134-493e-b21a-7ea508df90a0', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Dua Bid', 'data-dua-bid', 'deskripsi data dua bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:14', '2023-05-07 11:39:14'),
(13, '0118320c-bc4e-4f1e-8d36-e9e36c12dc48', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tiga Bid', 'data-tiga-bid', 'deskripsi data tiga bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-05-07', '19:20:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 12:03:46', '2023-05-07 12:03:46'),
(14, 'f75cf749-0c77-4115-8bc2-01fd38c9586b', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Empat Bid', 'data-empat-bid', 'deskripsi data empat bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:30', '2023-05-07 11:39:30'),
(15, '560d05b8-f71a-4cb9-9eb3-09bd344e8889', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Lima Bid', 'data-lima-bid', 'deskripsi data lima bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:34', '2023-05-07 11:39:34'),
(16, '62fb39e6-9b4e-4ac8-826f-ab6ddd5b244d', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Enam Bid', 'data-enam-bid', 'deskripsi data enam bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:41', '2023-05-07 11:39:41'),
(17, 'c52ba493-8552-4b4a-b466-dfe7f2568de9', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tujuh Bid', 'data-tujuh-bid', 'deskripsi data tujuh bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:46', '2023-05-07 11:39:46'),
(18, '69c74f82-b0ef-43df-a938-0d020162ca80', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Delapan Bid', 'data-delapan-bid', 'deskripsi data delapan bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:53', '2023-05-07 11:39:53'),
(19, 'f4d4eff1-6bad-484e-b44f-e069f5192c8c', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sembilan Bid', 'data-sembilan-bid', 'deskripsi data sembilan bid hanya sebagai contoh', 'Image.png', '10 x 10', '', '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:39:57', '2023-05-07 11:39:57'),
(20, '1f1ff3b3-0414-484a-b84e-d5b5720a254d', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sepuluh Bid', 'data-sepuluh-bid', 'deskripsi data sepulih bid hanya sebagai contoh', 'Image.png', '10 x 10', NULL, '2023-05-01', '10:00:00', '2023-06-10', '17:00:00', 5000000, 10000000, 'Expressionism,Manga,Collage technique', 'bid', '1', '2023-05-07 11:40:01', '2023-05-07 11:40:01'),
(21, '187b4206-7306-4d05-8e82-d523b2bf98b9', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Satu Diskon', 'data-satu-diskon', 'deskripsi data satu diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:18', '2023-05-07 07:20:18'),
(22, '3cca4761-3d5d-4771-8d8e-3be74b70c263', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Dua Diskon', 'data-dua-diskon', 'deskripsi data dua diskon hanya sebagai contoh', 'Image.png', '10 x 10', '5', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 11:16:41', '2023-05-07 11:16:41'),
(23, '69a0e5c5-a815-46fc-96d4-90d4e9f2e024', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tiga Diskon', 'data-tiga-diskon', 'deskripsi data tiga diskon hanya sebagai contoh', 'Image.png', '10 x 10', '10', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 11:16:37', '2023-05-07 11:16:37'),
(24, 'e6346194-313a-41f2-94a5-92031fbdc44d', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Empat Diskon', 'data-empat-diskon', 'deskripsi data empat diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:18', '2023-05-07 07:20:18'),
(25, 'a1c8fa94-36b1-46ed-b437-f106bdded2ed', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Lima Diskon', 'data-lima-diskon', 'deskripsi data lima diskon hanya sebagai contoh', 'Image.png', '10 x 10', '30', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 11:16:46', '2023-05-07 11:16:46'),
(26, 'abfc9bea-9e95-40c6-b8ef-e7e5e7f5eebe', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Enam Diskon', 'data-enam-diskon', 'deskripsi data enam diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:18', '2023-05-07 07:20:18'),
(27, '5eb4c88d-a766-4f96-92f6-19010d396607', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Tujuh Diskon', 'data-tujuh-diskon', 'deskripsi data tujuh diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:18', '2023-05-07 07:20:18'),
(28, 'f7233e07-aea2-41d4-a852-c5e39f6ab44c', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Delapan Diskon', 'data-delapan-diskon', 'deskripsi data delapan diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:18', '2023-05-07 07:20:18'),
(29, '', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sembilan Diskon', 'data-sembilan-diskon', 'deskripsi data sembilan diskon hanya sebagai contoh', 'Image.png', '10 x 10', '50', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 11:17:11', '2023-05-07 11:17:11'),
(30, '3f91c9af-8233-4de9-924f-803bb0e2c56b', '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Data Sepuluh Diskon', 'data-sepuluh-diskon', 'deskripsi data sepuluh diskon hanya sebagai contoh', 'Image.png', '10 x 10', '20', NULL, NULL, NULL, NULL, NULL, 10000000, 'Expressionism,Manga,Collage technique', 'discount', '1', '2023-05-07 07:20:44', '2023-05-07 07:20:44');

-- --------------------------------------------------------

--
-- Table structure for table `arts_bid`
--

CREATE TABLE `arts_bid` (
  `id_bid` int(11) NOT NULL,
  `uuid_user` varchar(255) NOT NULL,
  `uuid_arts` varchar(255) NOT NULL,
  `price_bid` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `date_event` datetime NOT NULL,
  `end_event` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id_event`, `title`, `slug`, `content`, `image`, `date_event`, `end_event`, `created_at`, `updated_at`) VALUES
(1, 'Test Event Satu', 'test-event-satu', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:02', '2023-05-10 02:23:02'),
(2, 'Test Event Dua', 'test-event-dua', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:22', '2023-05-10 02:23:22'),
(3, 'Test Event Tiga', 'test-event-tiga', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:27', '2023-05-10 02:23:27'),
(4, 'Test Event Empat', 'test-event-empat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:34', '2023-05-10 02:23:34'),
(5, 'Test Event Lima', 'test-event-lima', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:39', '2023-05-10 02:23:39'),
(6, 'Test Event Enam', 'test-event-enam', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:45', '2023-05-10 02:23:45'),
(7, 'Test Event Tujuh', 'test-event-tujuh', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:23:53', '2023-05-10 02:23:53'),
(8, 'Test Event Delapan', 'test-event-delapan', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:24:02', '2023-05-10 02:24:02'),
(9, 'Test Event Sembilan', 'test-event-sembilan', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:24:11', '2023-05-10 02:24:11'),
(10, 'Test Event Sepuluh', 'test-event-sepuluh', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 04:16:15', '2023-06-10 04:16:15', '2023-05-10 02:24:17', '2023-05-10 02:24:17');

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id_information` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `information` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id_information`, `title`, `slug`, `information`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Test Information Satu', 'test-information-satu', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:09:34', '2023-05-10 02:09:34'),
(2, 'Test Information Dua', 'test-information-dua', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:09:39', '2023-05-10 02:09:39'),
(3, 'Test Information Tiga', 'test-information-tiga', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:09:45', '2023-05-10 02:09:45'),
(4, 'Test Information Empat', 'test-information-empat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:09:52', '2023-05-10 02:09:52'),
(5, 'Test Information Lima', 'test-information-lima', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:09:57', '2023-05-10 02:09:57'),
(6, 'Test Information Enam', 'test-information-enam', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:10:02', '2023-05-10 02:10:02'),
(7, 'Test Information Tujuh', 'test-information-tujuh', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:10:09', '2023-05-10 02:10:09'),
(8, 'Test Information Delapan', 'test-information-delapan', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:10:15', '2023-05-10 02:10:15'),
(9, 'Test Information Sembilan', 'test-information-sembilan', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:10:23', '2023-05-10 02:10:23'),
(10, 'Test Information Sepuluh', 'test-information-sepuluh', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:10:31', '2023-05-10 02:10:31'),
(11, 'Test Information Sebelas', 'test-information-sebelas', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Image.png', '2023-05-10 02:13:55', '2023-05-10 02:14:15');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id_notification` int(11) NOT NULL,
  `uuid_user` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `crated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `upadated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `uuid_user` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `role` enum('user','seller','admin','root') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `uuid_user`, `name`, `username`, `email`, `password`, `phone`, `avatar`, `role`, `created_at`, `updated_at`) VALUES
(1, '4a465b4f-cb5e-4cbf-9527-f50b8d275b9f', 'Edo Sugita Ibrahim', 'Esion', 'edosugita.es@gmail.com', '$2b$10$AneORz2me1U6Nyu2RxDyIecPHRPHnSkGOFWCid0K03EQn82eU.Fte', '82240709305', 'avatar.jpg', 'user', '2023-04-25 14:17:10', '2023-05-06 10:08:22'),
(2, '4ced89f0-5b91-43dc-833e-a797d7ae6118', 'wagyu', 'wagy', 'playingcard75@gmaiil.com', '$2b$10$2WhbFfK76.a7zPYnWf4DQ.4fBe/t0bRnEf8rpMm/VHeleJ0SnnwF6', '8123456789', 'avatar.jpg', 'user', '2023-05-04 04:38:11', '2023-05-04 05:27:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arts`
--
ALTER TABLE `arts`
  ADD PRIMARY KEY (`id_art`),
  ADD UNIQUE KEY `uuid_art` (`uuid_art`);

--
-- Indexes for table `arts_bid`
--
ALTER TABLE `arts_bid`
  ADD PRIMARY KEY (`id_bid`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id_information`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id_notification`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `uuid_user` (`uuid_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arts`
--
ALTER TABLE `arts`
  MODIFY `id_art` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `arts_bid`
--
ALTER TABLE `arts_bid`
  MODIFY `id_bid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id_information` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id_notification` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
