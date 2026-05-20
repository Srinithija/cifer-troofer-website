import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { courseDetails } from '../../data/courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDetails[courseId];
  const [showEnroll, setShowEnroll] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const enrollRef = useRef(null);

  const revealEnrollForm = () => {
    setShowEnroll(true);
    setTimeout(() => {
      enrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  if (!course) {
    return (
      <>
        <Header />
        <main className="w-full bg-slate-50 min-h-[calc(100vh-160px)] px-4 py-24">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 p-10 text-center shadow-xl">
            <h1 className="text-3xl font-semibold text-slate-900 mb-4">Course not found</h1>
            <p className="text-base text-slate-600 mb-6">The course you're looking for is unavailable right now.</p>
            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 text-white font-semibold hover:scale-105 transition-transform duration-300"
            >
              Back to Courses
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnroll = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{course.title} | Course Details</title>
        <meta name="description" content={course.subtitle} />
        <meta property="og:title" content={`${course.title} Course Detail`} />
        <meta property="og:description" content={course.subtitle} />
      </Helmet>
      <Header />
      <main className="w-full bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#f8f0ff] to-[#eef2ff] pt-32 pb-20">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#6366f1]/10 blur-3xl" />
          <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#8b5cf6]/15 blur-3xl" />
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#6366f1] bg-white/90 px-4 py-2 text-sm font-semibold text-[#4338ca] shadow-sm">
                  Course Detail
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  {course.title}
                </h1>
                <p className="max-w-3xl text-base sm:text-lg leading-8 text-slate-700">
                  {course.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={revealEnrollForm}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-7 py-3 text-base font-semibold text-white shadow-xl shadow-[#6366f1]/20 hover:scale-105 transition-transform duration-300"
                  >
                    Enroll Now
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/courses')}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors duration-200"
                  >
                    Back to Courses
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_60px_120px_-70px_rgba(99,102,241,0.35)]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-10">
              <div className="rounded-[32px] border border-gray-200 bg-slate-50 p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-slate-900 mb-6">What We Offer</h2>
                <p className="text-base leading-8 text-slate-700 mb-8">{course.overview}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-[#4338ca] mb-2">Feature {index + 1}</p>
                      <p className="text-sm leading-6 text-slate-600">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {course.modules.map((module, moduleIndex) => (
                  <article key={moduleIndex} className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#6366f1] font-semibold mb-3">Module {moduleIndex + 1}</p>
                        <h3 className="text-2xl font-semibold text-slate-900">{module.title}</h3>
                      </div>
                      <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#4338ca]">
                        {module.modules.length} Topics
                      </span>
                    </div>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {module.modules.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                          <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#6366f1] text-xs text-white">{itemIndex + 1}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-gray-200 bg-[#f8fafc] p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Course Snapshot</h2>
                <div className="space-y-4 text-slate-700">
                  <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-4 shadow-sm">
                    <span className="text-sm text-slate-500">Duration</span>
                    <strong className="text-base text-slate-900">{course.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-4 shadow-sm">
                    <span className="text-sm text-slate-500">Level</span>
                    <strong className="text-base text-slate-900">{course.level}</strong>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-4 shadow-sm">
                    <span className="text-sm text-slate-500">Course Type</span>
                    <strong className="text-base text-slate-900">Online / Hybrid</strong>
                  </div>
                  <div className="rounded-3xl bg-[#6366f1] px-5 py-4 text-white shadow-lg">
                    <p className="text-sm opacity-90">Ready to join?</p>
                    <p className="mt-2 text-xl font-semibold">Apply now and secure your seat.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Enrollment</h2>
                <p className="text-sm leading-7 text-slate-600 mb-6">
                  Click the button below to open the enrollment form and reserve your spot in this course.
                </p>
                <button
                  type="button"
                  onClick={revealEnrollForm}
                  className="w-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 text-base font-semibold text-white shadow-xl shadow-[#6366f1]/20 hover:scale-[1.02] transition-transform duration-300"
                >
                  Open Enrollment Form
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="w-full bg-slate-50 py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
              <h2 className="text-3xl font-semibold text-slate-900">Course Modules</h2>
              <p className="text-sm text-slate-600">Detailed curriculum for every learning stage.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.modules.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#eef2ff] text-sm font-semibold text-[#4338ca]">{topicIndex + 1}</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showEnroll && (
          <section ref={enrollRef} className="w-full bg-gradient-to-br from-[#6366f1]/10 via-[#8b5cf6]/10 to-[#a855f7]/10 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[36px] border border-white/60 bg-white/95 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-8 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#6366f1] font-semibold">Enrollment Form</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">Reserve your seat in {course.title}</h2>
                  <p className="mt-3 text-slate-600">Fill in your details and we will contact you with the next steps.</p>
                </div>

                {submitted ? (
                  <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
                    <p className="text-2xl font-semibold text-green-800 mb-4">Application received!</p>
                    <p className="text-slate-700 mb-6">Thank you, {formData.name || 'student'}. We have received your request and will contact you shortly.</p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full bg-[#6366f1] px-6 py-3 text-white font-semibold shadow-lg hover:bg-[#4f46e5] transition-colors duration-200"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnroll} className="grid gap-6 md:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Full name"
                      className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition-shadow duration-200 focus:border-[#6366f1] focus:shadow-lg focus:shadow-[#6366f1]/10"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email address"
                      className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition-shadow duration-200 focus:border-[#6366f1] focus:shadow-lg focus:shadow-[#6366f1]/10"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone number"
                      className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition-shadow duration-200 focus:border-[#6366f1] focus:shadow-lg focus:shadow-[#6366f1]/10"
                    />
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What do you want to learn?"
                      className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition-shadow duration-200 focus:border-[#6366f1] focus:shadow-lg focus:shadow-[#6366f1]/10"
                    />
                    <div className="md:col-span-2 space-y-3">
                      <p className="text-sm text-slate-600">Selected course</p>
                      <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-slate-700">{course.title}</div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-[#6366f1]/20 hover:scale-[1.02] transition-transform duration-300"
                      >
                        Submit Enrollment
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowEnroll(false)}
                        className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                      >
                        Close Form
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CourseDetail;
