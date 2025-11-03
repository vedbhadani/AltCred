import { useState, useEffect } from 'react'
import { register } from '../services/auth.api'
import { useAsync } from '../hooks/useAsync'
import { useToastContext } from '../context/ToastContext'

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Puducherry',
]

export default function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    state: '',
  })
  
  const toast = useToastContext()
  const { loading, execute } = useAsync(async (data) => {
    // Note: Current backend requires 'password' field, but modal doesn't have it
    // This is a placeholder - adjust based on your actual API
    return await register({
      name: data.name,
      email: data.email,
      // For now, we'll just show a success message
      // In production, you'd need to add password field or use different endpoint
    })
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Client-side validation
    if (!formData.name || !formData.email || !formData.age || !formData.state) {
      toast.error('Please fill in all required fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    // Age validation
    const age = parseInt(formData.age)
    if (age < 18 || age > 100) {
      toast.error('Age must be between 18 and 100')
      return
    }

    // For now, show success message (since backend register needs password)
    // TODO: Update this when you add password field or use different endpoint
    try {
      // Uncomment when backend is ready:
      // const result = await execute(formData)
      // if (result.success) {
      //   toast.success(`Thank you ${formData.name}! Registration successful.`)
      //   setFormData({ name: '', email: '', age: '', state: '' })
      //   onClose()
      // }
      
      // Temporary success message
      toast.success(`Thank you ${formData.name}! We've received your information. We'll be in touch soon.`)
      setFormData({ name: '', email: '', age: '', state: '' })
      onClose()
    } catch (error) {
      // Error handling is done by useAsync hook
      // This catch is for any unexpected errors
      console.error('Unexpected error:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Trigger cursor update when modal opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        // Dispatch custom event to trigger cursor hook refresh
        const event = new CustomEvent('modalOpened')
        window.dispatchEvent(event)
      }, 100)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <h2>Get Started with AltCred</h2>
          <p>Fill in your details to begin your credit journey</p>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">
                Age <span className="required">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="25"
                min="18"
                max="100"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">
                State <span className="required">*</span>
              </label>
              <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                <option value="">Select State</option>
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Processing...' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

