import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tools | Cifer Troofer - Network Tracker</title>
        <meta
          name="description"
          content="Access Cifer Troofer's network utilities: IP Locator, IP Grabber, and DNS Lookup tools for fast tracking and diagnostics."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 md:px-8 lg:px-16">
        <section className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="mb-10 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Toolkit</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Network Utility Suite</h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              Choose the right tool for tracking IP addresses, grabbing connection information, or performing DNS lookups with speed and reliability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/tools/ip-locator"
              className="rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 transition hover:border-cyan-300/60 hover:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-white">IP Locator</h2>
              <p className="mt-3 text-slate-400">
                Find geolocation information and network details for any IP address.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300">
                Launch tool →
              </span>
            </Link>

            <Link
              to="/tools/ip-grabber"
              className="rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 transition hover:border-cyan-300/60 hover:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-white">IP Grabber</h2>
              <p className="mt-3 text-slate-400">
                Capture remote connection details and inspect live IP address data.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300">
                Launch tool →
              </span>
            </Link>

            <Link
              to="/tools/dns-lookup"
              className="rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 transition hover:border-cyan-300/60 hover:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-white">DNS Lookup</h2>
              <p className="mt-3 text-slate-400">
                Query DNS records and inspect hostname mappings instantly.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300">
                Launch tool →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ToolsPage;
