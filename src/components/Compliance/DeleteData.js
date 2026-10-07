// src/components/Compliance/DeleteData.js - ADGROW AI BRANDED VERSION
import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Delete,
  Email,
  Security,
  CheckCircle,
  Warning
} from '@mui/icons-material';
import adgrowIcon from '../../assets/logos/adgrow-icon.png';

// Formspree form "Data deletion requests" (public by design: browsers see it).
const DELETION_FORM_ID = 'mwlvplka';

const DeleteData = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  React.useEffect(() => {
    document.title = 'Data Deletion Request - Adgrow AI';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId.trim()) {
      setStatus('Please enter your App-Scoped User ID');
      return;
    }
    if (!email.trim()) {
      setStatus('Please enter an email address so we can confirm when your data is deleted');
      return;
    }

    // Sent to Formspree, which emails the request to admin@adgrowai.com. Deletion
    // is done by hand, so only confirm receipt once the request has been delivered.
    const reference = 'ADG-DEL-' + Date.now();
    setSending(true);
    setStatus('');
    try {
      const response = await fetch(`https://formspree.io/f/${DELETION_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Data deletion request ${reference}`,
          reference,
          app_scoped_user_id: userId.trim(),
          email: email.trim(),
          additional_information: confirmationCode.trim(),
          requested_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus(reference);
      setSubmitted(true);
    } catch (error) {
      setStatus('We couldn\'t send your request just now. Please try again, or use Email Request below.');
    } finally {
      setSending(false);
    }
  };

  const handleEmailDeletion = () => {
    const subject = encodeURIComponent('Facebook Data Deletion Request - Adgrow AI');
    const body = encodeURIComponent(`
Facebook Data Deletion Request

App: Adgrow AI - Marketing Automation Platform
Website: www.adgrowai.com
App-Scoped User ID: ${userId || '[Please provide your User ID]'}
Contact Email: ${email || '[Your email address]'}
Request Date: ${new Date().toLocaleDateString()}

I request deletion of all my personal data associated with the Adgrow AI app, including:
- Profile information from Facebook login
- Campaign data and settings
- Usage analytics and logs
- Any cached data or preferences

Please confirm deletion within 30 days as required by Facebook policy.

Thank you.
    `);
    
    window.open(`mailto:aman@adgrowai.com?subject=${subject}&body=${body}`);
  };

  return (
    <>
      {/* Meta-specific structured data */}
      <div style={{ display: 'none' }}>
        <div itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Data Deletion Request - Adgrow AI" />
          <meta itemProp="description" content="Request deletion of your personal data from Adgrow AI app in compliance with Facebook platform policy" />
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/WebAPI">
            <meta itemProp="name" content="Facebook Data Deletion" />
            <meta itemProp="description" content="User data deletion request form for Facebook app users" />
          </div>
        </div>
      </div>

      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}>
        <Toolbar>
          <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Facebook Data Deletion Request - Adgrow AI
          </Typography>
          <Button 
            color="inherit" 
            href="/"
            sx={{ textTransform: 'none' }}
          >
            Back to Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
            <Security sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Facebook Data Deletion Request
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adgrow AI - Marketing Automation Platform
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Request deletion of your Facebook data from our platform
            </Typography>
          </Box>

          {/* Meta Compliance Notice */}
          <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
            <Typography variant="body2">
              <strong>Facebook Data Deletion:</strong> This page allows you to request deletion of personal data 
              associated with your Facebook login to the Adgrow AI app, in compliance with Facebook Platform Policy.
            </Typography>
          </Alert>

          {!submitted ? (
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Submit Data Deletion Request
              </Typography>
              
              <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
                <Typography variant="body2">
                  <strong>Your App-Scoped User ID</strong> is the unique identifier Facebook provides to our app. 
                  This ID does not reveal your identity but allows us to locate and delete your data.
                </Typography>
              </Alert>
              
              <TextField
                fullWidth
                required
                label="Facebook App-Scoped User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                margin="normal"
                helperText="Required: Your unique Facebook identifier for this app"
                placeholder="e.g., 1234567890123456789"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                required
                label="Contact Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                helperText="Required: we'll email you here when your data has been deleted"
                placeholder="your.email@example.com"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Additional Information (Optional)"
                multiline
                rows={2}
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                margin="normal"
                helperText="Optional: Any additional information about your deletion request"
                sx={{ mb: 3 }}
              />

              {status && !submitted && (
                <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                  {status}
                </Alert>
              )}

              <Box sx={{ mt: 3, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={sending}
                  startIcon={<Delete />}
                  sx={{ 
                    flex: 1, 
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                    }
                  }}
                >
                  {sending ? 'Sending…' : 'Submit Deletion Request'}
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  onClick={handleEmailDeletion}
                  sx={{ 
                    flex: 1, 
                    borderColor: 'primary.main', 
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.light'
                    }
                  }}
                >
                  Email Request
                </Button>
              </Box>
            </Box>
          ) : (
            <Alert severity="success" sx={{ mt: 3, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircle sx={{ mr: 1 }} />
                <Typography variant="h6">Request received</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We've received your data deletion request. Your reference is <strong>{status}</strong>.
              </Typography>
              <Typography variant="body2">
                <strong>What happens next:</strong>
                <br />• We'll delete your data within 30 days
                <br />• We'll email {email.trim()} when it's done
                <br />• Questions? Email aman@adgrowai.com and quote your reference
              </Typography>
            </Alert>
          )}

          <Divider sx={{ my: 4 }} />

          {/* Facebook-Specific Data Deletion Information */}
          <Typography variant="h6" gutterBottom>
            Facebook Data That Will Be Deleted
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Facebook Profile Data" 
                secondary="Name, email, profile picture obtained through Facebook Login"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="App-Scoped User ID" 
                secondary="Your unique identifier provided by Facebook for this app"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Facebook Page Access" 
                secondary="Any connected Facebook business pages or advertising accounts"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Platform Usage Data" 
                secondary="How you've used Facebook features within our app"
              />
            </ListItem>
          </List>

          <Alert severity="warning" sx={{ mt: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Warning sx={{ mr: 1 }} />
              <Typography variant="h6">Important Information</Typography>
            </Box>
            <Typography variant="body2">
              <strong>Processing Time:</strong> Up to 30 days as required by Facebook Platform Policy
              <br /><strong>Confirmation:</strong> You'll receive email confirmation when deletion is complete
              <br /><strong>Irreversible:</strong> This action cannot be undone once processing begins
              <br /><strong>App Access:</strong> You'll need to re-authorize if you use our app again
            </Typography>
          </Alert>

          {/* Contact Section */}
          <Box sx={{ mt: 4, p: 3, backgroundColor: 'grey.100', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Questions About Data Deletion?
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> aman@adgrowai.com
              <br /><strong>Subject:</strong> "Facebook Data Deletion - Adgrow AI"
              <br /><strong>Website:</strong> <a href="https://www.adgrowai.com" target="_blank" rel="noopener noreferrer">www.adgrowai.com</a>
              <br /><strong>Privacy Policy:</strong> <a href="/privacy">View our complete Privacy Policy</a>
              <br /><strong>App:</strong> <a href="/">Return to Adgrow AI Dashboard</a>
            </Typography>
          </Box>

          {/* Meta-required footer */}
          <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
            <img src={adgrowIcon} alt="" className="h-10 w-10" />
              <span className="text-2xl font-bold logo-text-gradient">Adgrow AI</span>
            <Typography variant="caption" color="text.secondary">
              This data deletion process complies with Facebook Platform Policy requirements. 
              For questions about Facebook's data handling, visit <a href="https://www.facebook.com/privacy" target="_blank" rel="noopener noreferrer">Facebook Privacy Center</a>.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Adgrow AI - AI-Powered Marketing Automation Platform | www.adgrowai.com
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default DeleteData;