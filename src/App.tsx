/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div id="mainframe-app" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Mouse-scrubbed background video */}
      <BackgroundVideo />

      {/* Navigation bar and mobile drawer */}
      <Navbar />

      {/* Hero section */}
      <Hero />
    </div>
  );
}
