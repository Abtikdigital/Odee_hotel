import mongoose from "mongoose";
import joi from "joi";
import nodemailer from "nodemailer";

const {
  SMTP_HOST_NAME,
  SMTP_PORT,
  SECURE,
  MONGODB_URI,
  SMTP_MAIL,
  SMTP_PASS,
} = process.env;

let cached = global._mongooseConnection;

const dbConnection = async () => {
  if (cached) return cached;

  cached = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
  });

  global._mongooseConnection = cached;
  return cached;
};

const banquetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    eventType: {
      type: String,
      required: true,
      trim: true,
    },
    eventTitle: {
      type: String,
      required: true,
      trim: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    venuePreference: {
      type: String,
      required: true,
    },
    cateringStyle: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    decor: {
      type: String,
      default: "",
    },
    services: {
      type: [String],
      default: [],
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const BanquetModel =
  mongoose.models.banquet_lead ||
  mongoose.model("banquet_lead", banquetSchema);

const validationSchema = joi.object({
  name: joi.string().trim().min(2).required(),
  email: joi.string().email({ tlds: { allow: false } }).required(),
  phone: joi
    .string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base": "* Phone number must contain 10-15 digits",
    }),
  eventType: joi.string().required(),
  eventTitle: joi.string().min(3).required(),
  guestCount: joi.number().min(1).max(500).required(),
  eventDate: joi.date().iso().required(),
  timeSlot: joi.string().required(),
  venuePreference: joi.string().required(),
  cateringStyle: joi.string().required(),
  budget: joi.number().min(50000).required(),
  decor: joi.string().allow(""),
  services: joi.array().items(joi.string()).default([]),
  notes: joi.string().allow(""),
});

const transporter = nodemailer.createTransport({
  host: SMTP_HOST_NAME,
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
  port: Number(SMTP_PORT),
  secure: SECURE === "true" || SECURE === true,
});

const adminTemplate = (payload) => {
  const {
    name,
    email,
    phone,
    eventType,
    eventTitle,
    guestCount,
    eventDate,
    timeSlot,
    venuePreference,
    cateringStyle,
    budget,
    decor,
    services,
    notes,
  } = payload;

  const prettyDate = new Date(eventDate).toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `
  <html>
    <body style="font-family: 'Segoe UI', sans-serif; background:#f6f9f7; padding:32px;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 16px 40px rgba(15,58,44,0.18);">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#071f16 0%,#0f3a2c 60%,#d1b16a 100%);color:#fff;">
          <h1 style="margin:0;font-size:28px;font-weight:700;">New Banquet Inquiry</h1>
          <p style="margin:6px 0 0;font-size:16px;opacity:.85;">Incoming request from ${name}</p>
        </div>
        <div style="padding:32px;">
          <h2 style="margin:0 0 18px;font-size:20px;color:#0f3a2c;">Guest Details</h2>
          <table style="width:100%;border-collapse:separate;border-spacing:0 10px;">
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Name</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${name}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Email</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;"><a href="mailto:${email}" style="color:#0f3a2c;">${email}</a></td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Phone</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;"><a href="tel:${phone}" style="color:#0f3a2c;">${phone}</a></td>
            </tr>
          </table>

          <h2 style="margin:32px 0 18px;font-size:20px;color:#0f3a2c;">Event Overview</h2>
          <table style="width:100%;border-collapse:separate;border-spacing:0 10px;">
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Event Type</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${eventType}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Occasion</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${eventTitle}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Guest Count</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${guestCount}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Preferred Date</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${prettyDate}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Time Slot</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${timeSlot}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Venue</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${venuePreference}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Catering Style</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">${cateringStyle}</td>
            </tr>
            <tr>
              <td style="background:#f3f7f4;padding:14px 18px;border-radius:14px 0 0 14px;font-weight:600;color:#0f3a2c;">Budget</td>
              <td style="background:#fdfdfc;padding:14px 18px;border-radius:0 14px 14px 0;color:#2e3c34;">₹${budget.toLocaleString()}</td>
            </tr>
          </table>

          ${
            decor
              ? `<div style="margin:28px 0;padding:22px;border-radius:16px;background:rgba(209,177,106,0.12);border:1px solid rgba(209,177,106,0.25);">
                  <h3 style="margin:0 0 10px;color:#0f3a2c;">Decor Vision</h3>
                  <p style="margin:0;color:#2e3c34;">${decor}</p>
                 </div>`
              : ""
          }

          ${
            services?.length
              ? `<div style="margin:28px 0;padding:22px;border-radius:16px;background:#f3f7f4;border:1px solid rgba(15,58,44,0.1);">
                  <h3 style="margin:0 0 12px;color:#0f3a2c;">Requested Services</h3>
                  <ul style="margin:0;padding-left:20px;color:#2e3c34;">
                    ${services.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                 </div>`
              : ""
          }

          ${
            notes
              ? `<div style="margin:28px 0;padding:22px;border-radius:16px;background:#fdfdfc;border:1px solid rgba(15,58,44,0.08);">
                  <h3 style="margin:0 0 12px;color:#0f3a2c;">Additional Notes</h3>
                  <p style="margin:0;color:#2e3c34;">${notes}</p>
                 </div>`
              : ""
          }
        </div>
      </div>
    </body>
  </html>
  `;
};

const guestTemplate = (payload) => {
  const { name, eventDate } = payload;

  const prettyDate = new Date(eventDate).toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `
  <html>
    <body style="font-family:'Segoe UI',sans-serif;background:#f7f4ee;padding:32px;">
      <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 12px 30px rgba(15,58,44,0.15);">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#071f16,#0f3a2c 65%,#d1b16a);color:#fff;">
          <h1 style="margin:0;font-size:26px;">Thank you, ${name.split(" ")[0]}!</h1>
          <p style="margin:6px 0 0;font-size:15px;opacity:.85;">We've received your banquet celebration plan.</p>
        </div>
        <div style="padding:32px;color:#2f3d34;">
          <p style="margin-top:0;">Our events concierge will connect with you within the next 24-48 business hours to refine every detail.</p>
          <div style="background:#f3f7f4;border-radius:16px;padding:22px 24px;margin:24px 0;border:1px solid rgba(15,58,44,0.1);">
            <h3 style="margin:0 0 10px;color:#0f3a2c;">Your celebration overview</h3>
            <p style="margin:0;">Preferred celebration date: <strong>${prettyDate}</strong></p>
          </div>
          <p style="margin:0 0 18px;">Feel free to reply to this email or call us at <a href="tel:${SMTP_MAIL}" style="color:#0f3a2c;font-weight:600;">${SMTP_MAIL}</a> for any immediate updates.</p>
          <p style="margin:0;">Warm regards,<br/><strong>The Odeé Banquets Team</strong></p>
        </div>
      </div>
    </body>
  </html>
  `;
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ isSuccess: false, message: "Only POST method is allowed" });
  }

  try {
    await dbConnection();

    const { error, value } = validationSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        isSuccess: false,
        message: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    }

    const normalizedPayload = {
      ...value,
      phone: value.phone.startsWith("+") ? value.phone : `+${value.phone}`,
      eventDate: new Date(value.eventDate),
      services: value.services || [],
    };

    await BanquetModel.create(normalizedPayload);

    await Promise.all([
      transporter.sendMail({
        to: normalizedPayload.email,
        from: SMTP_MAIL,
        subject: "We've received your banquet inquiry",
        html: guestTemplate(normalizedPayload),
      }),
      transporter.sendMail({
        to: SMTP_MAIL,
        from: SMTP_MAIL,
        subject: `New Banquet Inquiry • ${normalizedPayload.name}`,
        html: adminTemplate(normalizedPayload),
      }),
    ]);

    return res.status(201).json({
      isSuccess: true,
      message: "Thank you! Our concierge will contact you shortly.",
    });
  } catch (error) {
    console.error("Banquet API error", error);
    return res.status(500).json({
      isSuccess: false,
      message: "Internal server error",
    });
  }
};

export default handler;

