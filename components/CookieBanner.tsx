"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="owlsafe-cookie-consent"
      expires={180}
      containerClasses="owlsafe-cookie-banner"
      buttonClasses="owlsafe-cookie-accept"
      declineButtonClasses="owlsafe-cookie-reject"
      contentClasses="owlsafe-cookie-content"
      style={{
        left: "50%",
        bottom: "18px",
        transform: "translateX(-50%)",
        width: "calc(100% - 28px)",
        maxWidth: "980px",
        background: "#1B3A1F",
        color: "#ffffff",
        border: "1px solid rgba(227, 197, 65, 0.32)",
        boxShadow: "0 22px 70px rgba(27, 58, 31, 0.32)",
        padding: "18px 18px",
        zIndex: 9999,
        alignItems: "center",
        gap: "14px",
      }}
      contentStyle={{
        flex: "1 1 520px",
        margin: 0,
        fontFamily: "inherit",
        fontSize: "13px",
        lineHeight: "1.7",
        color: "rgba(255,255,255,0.82)",
      }}
      buttonWrapperClasses="owlsafe-cookie-buttons"
      buttonStyle={{
        background: "#E3C541",
        color: "#1B3A1F",
        border: "1px solid #E3C541",
        borderRadius: "0",
        padding: "11px 18px",
        fontFamily: "inherit",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        margin: "0",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#ffffff",
        border: "1px solid rgba(255,255,255,0.34)",
        borderRadius: "0",
        padding: "11px 18px",
        fontFamily: "inherit",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        margin: "0",
      }}
    >
      <div>
        <strong
          style={{
            display: "block",
            marginBottom: "4px",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Cookies on OwlSafe
        </strong>

        <span>
          We use cookies to improve site performance and understand how visitors
          use the website. You can accept or reject non-essential cookies. Read
          our{" "}
          <a
            href="/privacy-policy"
            style={{
              color: "#E3C541",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Privacy Policy
          </a>
          .
        </span>
      </div>

      <style jsx global>{`
        .owlsafe-cookie-banner {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            18px 100%,
            0 calc(100% - 18px)
          ) !important;
        }

        .owlsafe-cookie-buttons {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          margin: 0 !important;
          flex-wrap: wrap !important;
        }

        .owlsafe-cookie-accept,
        .owlsafe-cookie-reject {
          transition: all 0.2s ease !important;
          cursor: pointer !important;
          white-space: nowrap !important;
        }

        .owlsafe-cookie-accept:hover {
          background: #ead566 !important;
          border-color: #ead566 !important;
          transform: translateY(-1px);
        }

        .owlsafe-cookie-reject:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.58) !important;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .owlsafe-cookie-banner {
            bottom: 12px !important;
            width: calc(100% - 22px) !important;
            padding: 16px !important;
            display: block !important;
          }

          .owlsafe-cookie-content {
            margin-bottom: 14px !important;
          }

          .owlsafe-cookie-buttons {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            width: 100% !important;
          }

          .owlsafe-cookie-accept,
          .owlsafe-cookie-reject {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </CookieConsent>
  );
}