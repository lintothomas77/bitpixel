import { useState } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Container, SectionTag, SectionTitle, ParallaxBg, SectionOverlay, BtnFull } from '../styles/shared.jsx';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? '';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@bitpixelsolutions.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Section = styled.section`position:relative;padding:var(--section-pad);overflow:hidden;`;
const ContactBg = styled(ParallaxBg)`
  background:
    radial-gradient(ellipse 100% 100% at 0% 100%,rgba(108,99,255,.15) 0%,transparent 55%),
    radial-gradient(ellipse 80% 70% at 100% 0%,rgba(0,212,255,.1) 0%,transparent 55%),
    var(--c-surface);
`;
const Overlay = styled(SectionOverlay)`background:rgba(10,10,20,0.2);`;
const Grid = styled.div`
  display:grid;grid-template-columns:1fr 1.1fr;gap:5rem;align-items:start;
  position:relative;z-index:2;
  @media(max-width:768px){grid-template-columns:1fr;gap:3rem;}
`;
const LeadText = styled.p`font-size:1.05rem;color:var(--c-text-muted);margin-bottom:2.5rem;line-height:1.7;`;
const Details = styled.div`display:flex;flex-direction:column;gap:1.5rem;`;
const Item = styled.div`display:flex;align-items:flex-start;gap:1rem;`;
const ItemIcon = styled.div`
  width:44px;height:44px;flex-shrink:0;background:var(--c-primary-dim);
  border:1px solid var(--c-border);border-radius:12px;
  display:flex;align-items:center;justify-content:center;color:var(--c-primary);
`;
const ItemLabel = styled.span`display:block;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--c-text-muted);margin-bottom:.25rem;`;
const ItemValue = styled.a`color:var(--c-text);font-size:.95rem;line-height:1.6;transition:color var(--t-fast);&:hover{color:var(--c-accent);}`;
const Addr = styled.address`color:var(--c-text);font-size:.95rem;line-height:1.6;font-style:normal;`;
const FormWrap = styled.div`
  background:var(--c-card-glass);border:1px solid var(--c-border);
  border-radius:var(--r-card);padding:2.5rem;backdrop-filter:blur(12px);
  @media(max-width:480px){padding:1.75rem;}
`;
const FormTitle = styled.h3`font-size:1.35rem;margin-bottom:1.75rem;color:var(--c-text);`;
const FormRow = styled.div`
  display:grid;grid-template-columns:1fr 1fr;gap:1rem;
  @media(max-width:768px){grid-template-columns:1fr;}
`;
const FormGroup = styled.div`display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.1rem;`;
const Label = styled.label`font-size:.82rem;font-weight:500;color:var(--c-text-muted);letter-spacing:.04em;`;
const fieldCss = `
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  border-radius:10px;padding:.75rem 1rem;color:var(--c-text);
  font-family:var(--f-body);font-size:.95rem;outline:none;width:100%;
  transition:border-color var(--t-fast),box-shadow var(--t-fast),background var(--t-fast);
  &::placeholder{color:rgba(255,255,255,.2);}
  &:focus{border-color:var(--c-primary);background:rgba(108,99,255,.06);box-shadow:0 0 0 3px rgba(108,99,255,.15);}
`;
const Input = styled.input`${fieldCss}`;
const Textarea = styled.textarea`${fieldCss}resize:vertical;`;

export default function Contact() {
    useScrollReveal();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');
    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) { shake(); return; }
        if (!EMAIL_RE.test(form.email)) { shake(); return; }
        setStatus('loading');
        try {
            const data = new FormData();
            data.append('access_key', WEB3FORMS_KEY); data.append('to', CONTACT_EMAIL);
            data.append('subject', 'New Contact Form Message – BitPixel Solutions');
            data.append('redirect', 'false');
            Object.entries(form).forEach(([k, v]) => data.append(k, v));
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
            const json = await res.json();
            if (json.success) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setStatus('idle'), 4000); }
            else throw new Error(json.message);
        } catch (err) { console.error(err); setStatus('error'); setTimeout(() => setStatus('idle'), 3000); }
    };

    function shake() {
        const btn = document.getElementById('form-submit');
        if (!btn) return; btn.style.animation = 'none'; btn.offsetHeight;
        btn.style.animation = 'shake 0.4s ease';
        btn.addEventListener('animationend', () => { btn.style.animation = ''; }, { once: true });
    }

    const label = { idle: 'Send Message', loading: 'Sending…', success: 'Message Sent!', error: 'Failed – Try Again' }[status];
    const icon = { idle: '→', loading: '⏳', success: '✓', error: '✕' }[status];
    const extra = status === 'success' ? { background: 'linear-gradient(135deg,#22c55e,#16a34a)', boxShadow: '0 8px 24px rgba(34,197,94,.4)', borderColor: 'transparent' }
        : status === 'error' ? { background: 'linear-gradient(135deg,#ef4444,#b91c1c)', boxShadow: '0 8px 24px rgba(239,68,68,.35)' } : {};

    return (
        <Section id="contact" aria-label="Contact Us">
            <ContactBg aria-hidden="true" /><Overlay aria-hidden="true" />
            <Container>
                <Grid>
                    <div>
                        <SectionTag className="reveal">Get In Touch</SectionTag>
                        <SectionTitle className="reveal reveal-delay-1">Let's Build<br /><span className="gradient-text">Something Great</span></SectionTitle>
                        <LeadText className="reveal reveal-delay-2">Ready to transform your digital presence? Reach out and let's talk about your project.</LeadText>
                        <Details className="reveal reveal-delay-3">
                            <Item id="contact-email">
                                <ItemIcon><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></ItemIcon>
                                <div><ItemLabel>Email Us</ItemLabel><ItemValue href="mailto:contact@bitpixelsolutions.com">contact@bitpixelsolutions.com</ItemValue></div>
                            </Item>
                            <Item id="contact-phone">
                                <ItemIcon><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011.07 2.18 2 2 0 013.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg></ItemIcon>
                                <div><ItemLabel>Call Us</ItemLabel><ItemValue href="tel:+919745875010">+91 97458 75010</ItemValue></div>
                            </Item>
                            <Item id="contact-address">
                                <ItemIcon><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></ItemIcon>
                                <div><ItemLabel>Visit Us</ItemLabel><Addr>3rd Floor, Site No. 74, Mass Complex,<br />15th Cross Road, Sarakki Industrial Area,<br />3rd Phase, J. P. Nagar,<br />Bengaluru, Karnataka 560078</Addr></div>
                            </Item>
                        </Details>
                    </div>
                    <FormWrap className="reveal reveal-delay-2">
                        <form id="contact-form" onSubmit={handleSubmit} noValidate>
                            <FormTitle>Send a Message</FormTitle>
                            <FormRow>
                                <FormGroup><Label htmlFor="name">Your Name</Label><Input type="text" id="name" name="name" placeholder="John Doe" required autoComplete="name" value={form.name} onChange={handleChange} /></FormGroup>
                                <FormGroup><Label htmlFor="email">Email Address</Label><Input type="email" id="email" name="email" placeholder="john@example.com" required autoComplete="email" value={form.email} onChange={handleChange} /></FormGroup>
                            </FormRow>
                            <FormGroup><Label htmlFor="subject">Subject</Label><Input type="text" id="subject" name="subject" placeholder="Tell us what you need" value={form.subject} onChange={handleChange} /></FormGroup>
                            <FormGroup><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows="5" placeholder="Describe your project..." required value={form.message} onChange={handleChange} /></FormGroup>
                            <BtnFull type="submit" id="form-submit" disabled={status === 'loading'} style={extra}>
                                <span>{label}</span><span aria-hidden="true">{icon}</span>
                            </BtnFull>
                        </form>
                    </FormWrap>
                </Grid>
            </Container>
        </Section>
    );
}
