import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const DnsLookup = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLookup = async (event) => {
    event.preventDefault();
    if (!domain.trim()) {
      setError('Please enter a domain name.');
      setResult(null);
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain.trim())}&type=A`);
      const data = await response.json();

      if (!response.ok || data.Status !== 0) {
        throw new Error(data.Comment || 'Unable to resolve domain.');
      }

      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong while resolving DNS records.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>DNS Lookup | Cifer Troofer</title>
        <meta name="description" content="Resolve A records for any domain using Google Public DNS." />
      </Helmet>

      <Header />

      <main className="bg-[#020617] text-white min-h-screen">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-10 py-28">
          <div className="mb-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.25em]">DNS Lookup</p>
                <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Resolve domain A records fast.</h1>
              </div>
              <Link
                to="/tools"
                className="rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Back to Tools
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-slate-300">Use Google Public DNS to resolve a domain and show its A record answers.</p>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/5">
            <form onSubmit={handleLookup} className="grid gap-4 sm:grid-cols-[1.7fr_auto]">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Domain</span>
                <input
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                  placeholder="example.com"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#07111f] px-5 py-4 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Lookup
              </button>
            </form>

            {loading && <div className="rounded-3xl border border-cyan-400/20 bg-[#07111f] px-6 py-6 text-cyan-100">Resolving DNS records...</div>}
            {error && <div className="rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-200">{error}</div>}

            {result && (
              <div className="rounded-[32px] border border-cyan-400/20 bg-[#07111f] p-8">
                <h2 className="text-2xl font-semibold text-white">DNS Results</h2>
                <p className="mt-4 text-slate-400">Domain: {result.Question?.[0]?.name || domain}</p>
                <div className="mt-6 space-y-4">
                  {result.Answer ? result.Answer.map((answer, index) => (
                    <div key={index} className="rounded-3xl bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Type</p>
                      <p className="mt-2 text-lg font-semibold text-white">{answer.type}</p>
                      <p className="mt-3 text-slate-300">{answer.data}</p>
                    </div>
                  )) : <p className="text-slate-300">No A record answers were returned.</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DnsLookup;
