import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const IpGrabber = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPublicIp = async () => {
    setLoading(true);
    setError('');
    setIp('');

    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      if (!response.ok || !data.ip) {
        throw new Error('Unable to grab your public IP.');
      }
      setIp(data.ip);
    } catch (err) {
      setError(err.message || 'Unable to grab your IP address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>IP Grabber | Cifer Troofer</title>
        <meta name="description" content="Grab your current public IP address instantly and copy it to your clipboard." />
      </Helmet>

      <Header />

      <main className="bg-[#020617] text-white min-h-screen">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-10 py-28">
          <div className="mb-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.25em]">IP Grabber</p>
                <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Grab your public IP instantly.</h1>
              </div>
              <Link
                to="/tools"
                className="rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Back to Tools
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-slate-300">This tool fetches your current public IP using a free API and displays it directly in the browser.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
              <div>
                <p className="text-slate-300 leading-7">
                  Click the button below to grab your public IP address. This is the same value that external servers see when you access the internet.
                </p>
              </div>
              <button
                type="button"
                onClick={fetchPublicIp}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {loading ? 'Grabbing IP…' : 'Grab My IP'}
              </button>

              {error && <div className="rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-200">{error}</div>}

              {ip && (
                <div className="rounded-[32px] border border-cyan-400/20 bg-[#07111f] p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Public IP address</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{ip}</p>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard.writeText(ip)}
                    className="mt-6 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Copy IP
                  </button>
                </div>
              )}
            </div>

            <aside className="rounded-[32px] border border-white/10 bg-[#07111f] p-8 shadow-xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">IP Grabber</h2>
              <p className="mt-4 text-slate-300 leading-7">
                This utility is built to mirror the experience of a tracking landing page. It quickly retrieves and displays your current public address with one click.
              </p>
              <div className="mt-6 rounded-3xl bg-white/5 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">How it works</p>
                <p className="mt-3 leading-7">
                  The tool calls a public API and shows the IP your browser is using. It does not store any data on the server.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default IpGrabber;
