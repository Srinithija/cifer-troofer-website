import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const IpLocator = () => {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchIpInfo = async (query) => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`https://ipapi.co/${query}/json/`);
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.reason || 'Unable to fetch IP information.');
      }

      setResult(data);
    } catch (err) {
      setError(err.message || 'Unable to fetch IP address information.');
    } finally {
      setLoading(false);
    }
  };

  const handleLookup = (event) => {
    event.preventDefault();
    if (!ip.trim()) {
      setError('Please enter an IP address.');
      return;
    }
    fetchIpInfo(ip.trim());
  };

  const handleMyIp = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      if (!response.ok || !data.ip) {
        throw new Error('Unable to find your public IP.');
      }
      setIp(data.ip);
      fetchIpInfo(data.ip);
    } catch (err) {
      setError(err.message || 'Unable to get your public IP.');
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>IP Locator | Cifer Troofer</title>
        <meta name="description" content="Lookup any IP address and view location, ISP, and timezone details." />
      </Helmet>

      <Header />

      <main className="bg-[#020617] text-white min-h-screen">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 py-28">
          <div className="mb-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.25em]">IP Locator</p>
                <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Track any IP address instantly.</h1>
              </div>
              <Link
                to="/tools"
                className="rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Back to Tools
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-slate-300">Look up IP location, ISP, city, region, timezone and more with a public API. No backend required.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
              <form onSubmit={handleLookup} className="space-y-4">
                <label className="block text-sm font-medium text-slate-300">
                  IP address
                  <input
                    value={ip}
                    onChange={(event) => setIp(event.target.value)}
                    placeholder="e.g. 8.8.8.8"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-[#07111f] px-5 py-4 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Get Info
                  </button>
                  <button
                    type="button"
                    onClick={handleMyIp}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    What&apos;s My IP
                  </button>
                </div>
              </form>

              {loading && <div className="rounded-3xl border border-cyan-400/20 bg-[#07111f] px-6 py-6 text-cyan-100">Loading IP information...</div>}
              {error && <div className="rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-200">{error}</div>}

              {result && (
                <div className="rounded-[32px] border border-cyan-400/20 bg-[#07111f] p-8">
                  <h2 className="text-2xl font-semibold text-white">IP Address Details</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">IP</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.ip}</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Country</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.country_name || 'N/A'}</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">City</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.city || 'N/A'}</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Region</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.region || 'N/A'}</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">ISP</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.org || 'N/A'}</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Timezone</p>
                      <p className="mt-2 text-lg font-semibold text-white">{result.timezone || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#07111f] p-8 shadow-xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">About IP Locator</h2>
              <p className="text-slate-300 leading-7">
                Use this tool to trace public IP addresses with geo-location, ASN, ISP and timezone data. It works entirely in your browser and uses a public API for fast results.
              </p>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Tip</p>
                <p className="mt-3 text-slate-200">If you want to start tracking right from the shop, click the button on the shop hero and it will take you here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default IpLocator;
