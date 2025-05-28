import { NextConfig } from "next";
import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withNextVideo(nextConfig));
