// src/components/Compliance/Privacy.js - ADGROW AI BRANDED VERSION
import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import {
  Security,
  ExpandMore,
  Email,
  Delete,
  Shield
} from '@mui/icons-material';
import adgrowIcon from '../../assets/logos/adgrow-icon.png';

const Privacy = () => {
  const lastUpdated = "July 8, 2025";

  React.useEffect(() => {
    document.title = 'Privacy Policy - Adgrow AI';
  }, []);

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}>
        <Toolbar>
          <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Adgrow AI - Privacy Policy
          </Typography>
          <Button 
            color="inherit" 
            href="/"
            sx={{ textTransform: 'none' }}
          >
            Back to Adgrow AI
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
            <Shield sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h3" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adgrow AI - Marketing Automation Platform
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Last Updated: {lastUpdated}
            </Typography>
          </Box>

          {/* Quick Actions */}
          <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  startIcon={<Delete />}
                  href="/delete-data"
                  sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  Request Data Deletion
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Email />}
                  href="mailto:aman@adgrowai.com?subject=Privacy Inquiry"
                  sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  Contact Privacy Team
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Privacy Policy Content */}
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Our Commitment to Your Privacy
          </Typography>
          
          <Typography variant="body1" paragraph>
            At Adgrow AI, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, protect, and share your information when you use our 
            AI-powered marketing automation platform.
          </Typography>

          <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
            <Typography variant="body2">
              <strong>Important:</strong> If you've connected your Meta (Facebook/Instagram) account to Adgrow AI, 
              this policy covers how we handle data from those connections in compliance with Meta's requirements.
            </Typography>
          </Alert>

          {/* Expandable Sections */}
          <Box sx={{ mt: 4 }}>
            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">1. Information We Collect</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  We collect information to provide and improve our AI-powered marketing automation services:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Account Information"
                      secondary="Name, email address, profile information from social media logins (Meta, Google)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Campaign Data"
                      secondary="Advertising campaigns you create, target audiences, budgets, and performance metrics"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="AI Analytics Data"
                      secondary="Performance data used for AI optimization, campaign recommendations, and automated bidding"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Connected Platform Data"
                      secondary="Data from connected advertising platforms (Google Ads, Meta, TikTok, YouTube) as authorized by you"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">2. How We Use Your Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  We use your information to provide our AI-powered marketing automation services:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="AI Campaign Optimization"
                      secondary="Analyze performance data and provide intelligent recommendations for campaign improvement"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Automated Campaign Management"
                      secondary="Create, manage, and optimize advertising campaigns across multiple platforms using AI"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Performance Analytics"
                      secondary="Provide detailed campaign analytics and AI-driven insights for better ROI"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Platform Integration"
                      secondary="Connect with authorized advertising platforms to execute your AI-optimized campaigns"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Account Management"
                      secondary="Maintain your account, provide customer support, and send service-related communications"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">3. Meta (Facebook/Instagram) Data Handling</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  When you connect your Meta accounts to Adgrow AI:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Limited Access"
                      secondary="We only access data necessary for AI-powered campaign creation and optimization"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="No Personal Posts"
                      secondary="We do not access your personal posts, messages, or private content"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Campaign Data Only"
                      secondary="We access advertising account data, campaign performance, and business page information for AI analysis"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="AI Optimization Purpose"
                      secondary="Meta data is used solely for providing AI-powered campaign optimization and performance insights"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Your Control"
                      secondary="You can revoke access at any time through your Meta account settings or by contacting us"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">4. Data Sharing and Third Parties</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  We do not sell your personal information. We may share data only in these limited circumstances:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Advertising Platforms"
                      secondary="With platforms you've authorized (Google Ads, Meta, TikTok) to execute your AI-optimized campaigns"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="AI Service Providers"
                      secondary="With trusted AI/ML partners who help us provide optimization algorithms and analytics"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Infrastructure Providers"
                      secondary="With cloud service providers (AWS, Google Cloud) who host our AI systems and data securely"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Legal Requirements"
                      secondary="When required by law or to protect our rights and the safety of our users"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Business Transfers"
                      secondary="In connection with a merger, acquisition, or sale of assets (with user notification)"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">5. Your Rights and Choices</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  You have several rights regarding your personal information:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Access and Portability"
                      secondary="Request a copy of your personal data and AI optimization history in a machine-readable format"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Correction"
                      secondary="Update or correct inaccurate personal information and campaign data"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Deletion"
                      secondary="Request deletion of your personal data (visit /delete-data page)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="AI Opt-Out"
                      secondary="Opt-out of AI-powered optimization features while maintaining basic campaign management"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Restriction"
                      secondary="Limit how we process your personal information for AI analysis"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Objection"
                      secondary="Object to processing of your personal information for certain AI optimization purposes"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">6. AI and Data Security</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  We implement industry-leading security measures to protect your data and AI systems:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Encryption"
                      secondary="All data is encrypted in transit and at rest using AES-256 encryption standards"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="AI Model Security"
                      secondary="Our AI models are trained on aggregated, anonymized data with strict privacy protections"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Access Controls"
                      secondary="Multi-factor authentication and role-based access controls for all systems"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Data Retention"
                      secondary="We retain data only as long as necessary for AI optimization or as required by law"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Security Audits"
                      secondary="Regular security audits, penetration testing, and compliance monitoring"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ borderRadius: 2 }}>
                <Typography variant="h6">7. International Data Transfers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Adgrow AI operates globally and may transfer your data internationally:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Data Centers"
                      secondary="Your data may be processed in secure data centers in the US, EU, and other regions"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Privacy Frameworks"
                      secondary="We comply with EU-US Privacy Framework and other international privacy agreements"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Safeguards"
                      secondary="Appropriate safeguards are in place for all international data transfers"
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Contact Information */}
          <Card sx={{ backgroundColor: 'grey.50', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Us About Privacy
              </Typography>
              <Typography variant="body2" paragraph>
                If you have questions about this Privacy Policy or want to exercise your rights:
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">
                  <strong>Privacy Officer:</strong> aman@adgrowai.com<br/>
                  <strong>Website:</strong> <a href="https://www.adgrowai.com" target="_blank" rel="noopener noreferrer">www.adgrowai.com</a><br/>
                  <strong>Subject Line:</strong> "Privacy Policy Inquiry" or "Data Rights Request"<br/>
                  <strong>Response Time:</strong> We'll respond within 72 hours
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<Delete />}
                  href="/delete-data"
                  sx={{ 
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                    }
                  }}
                >
                  Request Data Deletion
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Email />}
                  href="mailto:aman@adgrowai.com?subject=Privacy Policy Inquiry"
                  sx={{ 
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.light'
                    }
                  }}
                >
                  Email Privacy Team
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* GDPR/CCPA Compliance Section */}
          <Alert severity="success" sx={{ mt: 4, borderRadius: 2 }}>
            <Typography variant="body2">
              <strong>Compliance:</strong> Adgrow AI complies with GDPR, CCPA, Facebook Platform Policy, 
              and other international privacy regulations. We are committed to transparency and user control over personal data.
            </Typography>
          </Alert>

          {/* Footer */}
          <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
            <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
            <Typography variant="body2" color="text.secondary" paragraph>
              This Privacy Policy is effective as of {lastUpdated} and may be updated from time to time. 
              We will notify users of significant changes via email or platform notification.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href="/" style={{ textDecoration: 'none', color: '#2563eb' }}>Return to Adgrow AI Dashboard</a> | 
              <a href="/delete-data" style={{ marginLeft: '8px', textDecoration: 'none', color: '#2563eb' }}>Request Data Deletion</a>
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
              Adgrow AI - AI-Powered Marketing Automation Platform | www.adgrowai.com | aman@adgrowai.com
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Privacy;