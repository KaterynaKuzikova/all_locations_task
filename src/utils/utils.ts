export function formatCreatedAt(createdAt: string) {
    const date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    const formattedTime = formattedDate.replace(/\b([APap][Mm])\b/g, match => match.toLowerCase())
                                    .replace(/ GMT[+-]\d{1,2}(:\d{2})?/, '')
                                    .replace(/\s+/, '');
    const timeZoneOffset = date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
    const offsetHoursWithLeadingZero = String(offsetHours).padStart(2, '0');
    const offsetMinutes = Math.abs(timeZoneOffset) % 60;
    const offsetSign = timeZoneOffset >= 0 ? '-' : '+';
    const formattedTimeWithOffset = `${formattedTime} (GMT${offsetSign}${offsetHoursWithLeadingZero}:${offsetMinutes < 10 ? '0' : ''}${offsetMinutes})`;

  
    return formattedTimeWithOffset;
  }

